import * as ReactDOM from "react-dom";
import { MemoryRouter } from "react-router";
import { RegisterUserPage } from "../../src/client/registerUserPage";
import { act } from "react-dom/test-utils";
import React from "react";

describe("Registere en ny bruker", () => {
  it("Loader side uten", async function () {
    const container = document.createElement("div");
    document.body.appendChild(container);
    await act(async () => {
      ReactDOM.render(
        <MemoryRouter>
          <RegisterUserPage />
        </MemoryRouter>,
        container
      );
    });
    expect(container.innerHTML).toMatchSnapshot();
  });
});
