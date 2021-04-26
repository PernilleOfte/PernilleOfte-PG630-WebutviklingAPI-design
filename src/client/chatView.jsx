import React, {useState} from "react";

export function ChatView({onSendMessage, chatLog}) {
    const [message, setMessage] = useState("")

    function handleSubmitChatMessage(e) {
        e.preventDefault();
        onSendMessage(message);
        setMessage("");
    }

    return (
        <>
            <header>
                <h1>You can now chat</h1>
            </header>
            <main id="main-id">

                <div id="chatLog">
                    {chatLog.map((message, index) => (
                        <div key={index}><h4>{message}</h4></div>
                    ))}
                </div>
            </main>
            <footer id="footer-id">
                <form onSubmit={handleSubmitChatMessage}>
                    <input type="text" autoFocus={true} value={message} onChange={e => setMessage(e.target.value)}/>
                    <button>Submit</button>
                </form>
            </footer>
        </>
    );
}