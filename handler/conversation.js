
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
        
        let chat = null;
        const data = body;
        console.log(data);
    }
}