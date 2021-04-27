import TestRenderer from "react-test-renderer";
import {LoadingView} from "../../src/client/loadingView";
import * as ReactDOM from "react-dom";
import {act} from "react-dom/test-utils";
import React from "react"

describe("Loading view", () => {
    it("show loading view", ()=>{
        const view = TestRenderer.create(<LoadingView/>);
        expect(view.toJSON()).toMatchSnapshot();
    });
    it("Show loading view on dom", () => {
        const container = document.createElement("div");
        document.body.appendChild(container);
        act(() => {ReactDOM.render(<LoadingView />, container)});
        expect(container.innerHTML).toMatchSnapshot();
    })
})