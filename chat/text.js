"use strict"
import axios from "axios";
import Chat from "./chat.js";
import debug from "../comm/debug.js";
import { OpenAI } from "../service/openai.js";
import { getAccessToken } from "../ding/accesstoken.js";

export default class TextChat extends Chat {

    constructor(name) {
        super(name);
        this.host = 'https://api.dingtalk.com';
    }

    async toUser(staffID, robotCode, answer) {
        /*response to dingtalk*/
        const token = await getAccessToken();
        debug.log(answer);

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

        return axios.post(url, data, config);
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

    process(info, res) {

        const question = info?.text?.content;
        //const staffID = info?.senderStaffId;
        const robotCode = info?.robotCode;

        const openai = new OpenAI();
        openai.ctText(question).then(result => {
            const content = result?.data?.choices[0]?.message?.content;
            debug.out(content);
            if (!content)
                return;

            const answer = content;
            if(info.conversationType === '1')
                this.toUser(info?.senderStaffId, robotCode, answer);
            else if(info.conversationType === '2')
                this.toGroup(info?.conversationId, robotCode, answer);
        });
    }

}
