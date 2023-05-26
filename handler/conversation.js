import debug from "../comm/debug.js";
import TextChat from "../chat/text.js";

export default class Conversation {

    constructor() {
    }

    urlconfig(req, res) {
        res.send("OK");
    }

    process(body, res) {
        
        let chat = null; 
        const info = body;

        const msgtype = info.msgtype;
        
        if(msgtype === "text") {
            chat = new TextChat(msgtype);
        }

        if(!!chat) {
            chat.process(info, res);
            /*res.send("OK");*/
            return;
        }
    }
}
