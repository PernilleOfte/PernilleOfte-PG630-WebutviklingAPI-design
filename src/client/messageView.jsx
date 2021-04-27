import React, {useState} from "react";



export function MessageView({onSendMessage, messageLog}) {
    const [message, setMessage] = useState("")




    function handleSubmitChatMessage(e) {
        e.preventDefault();
        onSendMessage(message);
        setMessage("");
    }

    return (
        <>

            <header>
                <h1>Send en melding {}</h1>
            </header>
            <main id="main-id">
                <div id="chatLog">
                    {messageLog.map((message, index) => (
                        <div key={index}><h3>{message}</h3></div>
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