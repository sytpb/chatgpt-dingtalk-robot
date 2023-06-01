"use strict"
import axios from "axios";
import Chat from "./chat.js";
import Session from "./session.js";
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
            markdown = MDUserMsg(answer.slice(0,30), answer);
        else if (info.conversationType === '2')
            markdown = MDGroupMsg(answer.slice(0,30), senderId, answer);
        
        res.set({
            'Content-Type': 'application/json',
            'url': webHook
        });
        const result = res.send(JSON.stringify(markdown));
        debug.log(result);
    }


    process(info, res) {

        const question = info?.text?.content;
        let context = [{"role":"user" ,"content":question}];
        //const staffID = info?.senderStaffId;
        const robotCode = info?.robotCode;

        const openai = new OpenAI();
        if(process.env.CHAT_HISTORY === "yes")
            context = Session.update(info.conversationId, {"role":"user" ,"content":question});
        debug.out(context);
        
        openai.ctChat(context).then(result => {
            const message = result?.data?.choices[0]?.message;
            debug.log(message?.content);
            if (!message?.content)
                return;

            const answer = message.content;
            this.reply(info, answer, res);
        });
    }

}
