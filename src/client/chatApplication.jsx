import React, {useEffect, useState} from "react";

export function ChatApplication() {

    const [chatLog, setChatLog] = useState([]);
    const [message,setMessage] = useState("")
    const [ws, setWs] = useState();

    useEffect(() => {
        const ws = new WebSocket("ws://" + window.location.host);
        ws.onopen = event => {
            console.log("opened", event);
        }
        ws.onmessage = event => {
            console.log("Fra server", event);
            setChatLog((chatLog) => [...chatLog, event.data]);

        }

        ws.onclose = event => {
            console.log("close", event);
        };
        setWs(ws);

    }, []);

    function handleSubmitChatMessage(e) {
        e.preventDefault();
        ws.send(message);
        setMessage("");

    }

    return <>
    <header>

    <h1>This is a chat</h1>

    </header>
    <main id="main-id">
        <div id="chatLog">
            {chatLog.map((message, index)=> (
            <div key={index}><h1>{message}</h1></div>
            ))}
        </div>
    </main>
    <footer id="footer-id">
        <form onSubmit={handleSubmitChatMessage}>
            <input type="text" autoFocus={true} value={message} onChange={e => setMessage(e.target.value)}/>
            <button>Submit</button>
        </form>
    </footer>
    </>;
}