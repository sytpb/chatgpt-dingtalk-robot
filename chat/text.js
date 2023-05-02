"use strict"
import axios from "axios";
import Chat from "./chat.js";
import debug from "../comm/debug.js";
import { OpenAI } from "../service/openai.js";


export default class TextChat extends Chat {

    constructor(name) {
        super(name);
    }

    async response(staffID, robotCode, content) {
        /*response to dingtalk*/
        const token = await getAccessToken();

        const data = {
            "robotCode": robotCode,
            "userIds": [staffID],
            "msgKey": "sampleText",
            "msgParam": JSON.stringify({ "content": content })
        };
        const url = 'https://api.dingtalk.com/v1.0/robot/oToMessages/batchSend';

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

        debug.log("text chat...", xml);
        const staffID = info?.senderStaffId;
        const robotCode = info?.robotCode;

        const openai = new OpenAI();
        openai.ctText(text).then(result => {
            const content = result?.data?.choices[0]?.message?.content;
            if (!!content) {
                const answer = content;
                this.response(staffID, robotCode, answer);
            }
        });

    }

}