
import axios from "axios";
import {getAccessToken} from "../ding/accesstoken.js";

/*import debug from "../comm/debug.js";
import Message from "../comm/message.js";
import TextChat from "../chat/text.js";*/

export default class Conversation {

    constructor() {
    }

    urlconfig(req, res) {
        res.send("OK");
    }

    async process(body, res) {
        const info = body;
        const token = await getAccessToken();
        const staffID = info?.senderStaffId;
        const data = {
            "robotCode": info.robotCode,
            "userIds": [staffID],
            "msgKey": "sampleText",
            "msgParam": JSON.stringify({ "content": "Have got your message" })
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
}