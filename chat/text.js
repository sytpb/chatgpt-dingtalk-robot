"use strict"
import axios from "axios";
import Chat from "./chat.js";
import debug from "../comm/debug.js";
import { OpenAI } from "../service/openai.js";
import { MDUserMsg, MDGroupMsg } from "./template.js";
import { getAccessToken } from "../ding/accesstoken.js";

export default class TextChat extends Chat {

    constructor(name) {
        super(name);
        this.host = 'https://api.dingtalk.com';
    }

    async toUser(staffID, robotCode, answer, res) {
        /*response to dingtalk*/
        const token = await getAccessToken();
        debug.out(answer);

        const data = {
            "robotCode": robotCode,
            "userIds": [staffID],
            "msgKey": "sampleText",
            "msgParam": JSON.stringify({ "content": answer })
        };
        const url = this.host + '/v1.0/robot/oToMessages/batchSend';

        const config = {
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json",
                'x-acs-dingtalk-access-token': token
            }
        };

        await axios.post(url, data, config);
        res.send("OK");
    }

    async toGroup(conversationID, robotCode, answer) {
        /*response to dingtalk*/
        const token = await getAccessToken();
        debug.out(answer);

        const data = {
            "robotCode": robotCode,
            "openConversationId": conversationID,
            "msgKey": "sampleText",
            "msgParam": JSON.stringify({ "content": answer })
        };

        const url = this.host + '/v1.0/robot/groupMessages/send';

        const config = {
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json",
                'x-acs-dingtalk-access-token': token
            }
        };

        return axios.post(url, data, config);
    }

    async reply(info, answer, res) {
        const senderId = info.senderId;
        const webHook = info.sessionWebhook;

        let markdown = null;
        if (info.conversationType === '1')
            markdown = MDUserMsg(answer.slice(0,6), answer);
        else if (info.conversationType === '2')
            markdown = MDGroupMsg(answer.slice(0,6), senderId, answer);
        
        /*const markdownMsg = `<font color=#008000>@${senderId} </font>  \n\n ${answer}`;

        const data = {
            "msgtype": "markdown",
            "markdown": {
                "title": answer.slice(0,6),
                "text": markdownMsg
            },
            "at": {
                "atDingtalkIds": [
                    senderId
                ],
            }
        }
        const config = {
            method: 'post',
            url: webHook,
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        }
        
        await axios(config);
        res.send("OK");*/

        res.set({
            'Content-Type': 'application/json',
            'url': webHook
        });
        res.send(JSON.stringify(markdown));
    }


    process(info, res) {

        const question = info?.text?.content;
        //const staffID = info?.senderStaffId;
        const robotCode = info?.robotCode;

        const openai = new OpenAI();
        openai.ctText(question).then(result => {
            const content = result?.data?.choices[0]?.message?.content;
            debug.log(content);
            if (!content)
                return;

            const answer = content;
            this.reply(info, answer, res);
            /*if (info.conversationType === '1')
                this.toUser(info?.senderStaffId, robotCode, answer, res);
            else if (info.conversationType === '2')
                this.toGroup(info?.conversationId, robotCode, answer);*/
        });
    }

}
