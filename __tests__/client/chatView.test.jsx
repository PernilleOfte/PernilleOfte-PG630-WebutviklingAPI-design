import {ChatView} from "../../src/client/chatView";
import * as ReactDOM from "react-dom";
import React from "react";
import {Simulate} from "react-dom/test-utils";

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

    });
    it("Lager en ny chat", () => {
        const container = document.createElement("div");
        const onSendMessage = jest.fn();
        ReactDOM.render(
            <ChatView chatLog={[]} onSendMessage={onSendMessage}/>,
            container);
        Simulate.change(container.querySelector("input"), {
        target: {value: "Hei på deg"},

    });
        Simulate.submit(container.querySelector("form"));

        expect(onSendMessage).toBeCalledWith("Hei på deg")
    });
});