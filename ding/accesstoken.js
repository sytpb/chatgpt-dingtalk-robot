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

    const config  = { 
        headers:{
            'Accept': "application/json",
            'Content-Type': "application/json"
        }   
    };

    return axios.post(url, body, config);
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
