import express from "express";
import { config } from "dotenv";
import debug from "./comm/debug.js";
import { initAccessToken } from "./ding/accesstoken.js";

import conversation from "./route/conversation.js";


config();

const app = express();
const PORT = process.env.PORT;

/*message.log();*/
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/*health check for render*/
app.get('/healthz', function (req, res, next) {
    res.status(200).end();
});

app.use('/message', conversation);


/*init access_token*/
initAccessToken();

app.listen(PORT, () => {
    debug.out(`Server Running on Port:${PORT}`);
});

export default app;