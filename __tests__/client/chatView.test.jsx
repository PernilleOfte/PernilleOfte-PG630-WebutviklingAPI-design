import {ChatView} from "../../src/client/chatView";
import * as ReactDOM from "react-dom";
import React from "react";

describe("chat view", () => {
    it("Hvordan vise en chatlogg melding", () => {
        const container = document.createElement("div");
        ReactDOM.render(
            <ChatView chatLog={["Hei", "hvordan går det"]}/>,
            container
        );
        expect(container).toMatchSnapshot();
        expect(container.querySelector("#chatLog div").textContent).toEqual(
            "Hei");

    })
});