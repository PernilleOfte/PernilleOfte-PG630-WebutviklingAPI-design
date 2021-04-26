import React, {useEffect, useState} from "react";
import {ChatView} from "./chatView";

export function ChatApplication() {

    const [chatLog, setChatLog] = useState([]);
    const [ws, setWs] = useState();

    useEffect(() => {
        const ws = new WebSocket("ws://" + window.location.host);
        ws.onopen = event => {
            console.log("opened", event);
        }
        ws.onmessage = event => {
            console.log("Fra server", event);
            setChatLog((chatLog) => [...chatLog, event.data]);

        };

        ws.onclose = event => {
            console.log("close", event);
        };
        setWs(ws);

    }, []);

    return(<ChatView
            chatLog={chatLog}
            onSendMessage={(message) => ws.send(message)}
         />
    );
}