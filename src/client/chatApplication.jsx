import React from "react";

export function ChatApplication() {
    return <>
    <header>

    <h1>This is a chat</h1>

    </header>
    <main id="main-id">
        <div id="chatLog"></div>
    </main>
    <footer id="footer-id">
        <form>
            <input type="text" autoFocus={true}/>
            <button>Submit</button>
        </form>
    </footer>
    </>;
}