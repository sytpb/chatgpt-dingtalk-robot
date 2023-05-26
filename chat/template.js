export const MDUserMsg = (title, content) => {

    const data = {
        "msgtype": "markdown",
        "markdown": {
            "title": title,
            "text": content
        }
    };
    return data;
}


export const MDGroupMsg = (title, senderId, content) => {

    const text = `<font color=#008000>@${senderId} </font>  \n\n ${content}`;

    const data = {
        "msgtype": "markdown",
        "markdown": {
            "title": title,
            "text": text
        },
        "at": {
            "atDingtalkIds": [
                senderId
            ],
        }
    };
    return data;
}