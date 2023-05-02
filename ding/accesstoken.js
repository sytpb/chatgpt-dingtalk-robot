import axios from "axios";

let accessToken = { token: 'NO_TICKET', expire: 0 };


function newAccessToken() {

    const appKey = process.env.APPKEY;
    const appSecret = process.env.APPSECRET;
    const url = 'https://api.dingtalk.com/v1.0/oauth2/accessToken';

    const body = {
        "appKey": appKey,
        "appSecret": appSecret
    };

    // return new Promise((resolve, reject) => {
    //     request.post(URL,JSON.stringify(body), (err, res, body) => {
    //         if (res) {
    //             console.log(res);
    //             const token = JSON.parse(body)['accessToken'];
    //             resolve(token);
    //         } else {
    //             reject(err);
    //         }
    //     });
    // });


    // request.post({
    //     headers: { 'content-type': 'application/json' },
    //     url: URL,
    //     body: JSON.stringify(body)
    // }, function (error, response, body) {
    //     console.log(body);
    // });


    //const url =`${this.cloudfn}/oauth2/login`;  /*Request to cloud function*/

    const config  = { 
        headers:{
            'Accept': "application/json",
            'Content-Type': "application/json"
        }   
    };

    return axios.post(url, body, config);

    /*const data = {
        "robotCode" : "dingvtsutnn6fpuwipbt",
        "userIds" : [ "manager8559" ],
        "msgKey" : "sampleText",
        "msgParam" : JSON.stringify({"content": "this send message"})
    };
    request.post({
        headers: { 'content-type': 'application/json','x-acs-dingtalk-access-token':'170cd5c344053f008d2e54f5f590e995' },
        url: 'https://api.dingtalk.com/v1.0/robot/oToMessages/batchSend',
        body: JSON.stringify(data)
    }, function (error, response, body) {
        console.log(body);
    });*/

}

function setAccessToken(token) {

    const expire = new Date().getTime() + 2 * 60 * 60 * 1000;
    accessToken = { ...accessToken, token, expire }
}

async function getAccessToken() {

    const current = new Date().getTime();
    if (accessToken.expire > current)           /*timeout*/
        return accessToken.token;
    else {
        console.log("access token expired , refresh...")
        const token = await newAccessToken();
        setAccessToken(token);
        return token;
    }
}

async function initAccessToken() {
    const result = await newAccessToken();
    const token = result?.data?.accessToken;
    console.log("accesstoken === ", token);
    setAccessToken(token);
}

export {
    initAccessToken,
    getAccessToken
};
