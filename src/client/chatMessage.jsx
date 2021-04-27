import React, {useEffect, useState} from "react";
import {MessageView} from "./messageView";

export function ChatMessage() {
   const [messageLog, setmessageLog] = useState([]);
   const [ws, setWs] = useState();



   useEffect(() => {
      const ws = new WebSocket("ws://" + window.location.host);
      ws.onopen = event => {
         console.log("opened", event);
      }
      ws.onmessage = event => {
         console.log("Fra server", event);
         setmessageLog((messageLog) => [...messageLog, event.data]);

      };

      ws.onclose = event => {
         console.log("close", event);
      };
      setWs(ws);

   }, []);

   return(<MessageView
           messageLog={messageLog}
           onSendMessage={(message) => ws.send(message)}
       />
   );
}