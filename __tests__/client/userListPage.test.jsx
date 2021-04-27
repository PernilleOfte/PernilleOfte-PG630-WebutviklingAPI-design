import { act } from "react-dom/test-utils";
import { UserListPage } from "../../src/client/userListPage";
import * as ReactDOM from "react-dom";
import React from "react";
import { MemoryRouter } from "react-router";

const userApi = {
  listUsers: async () => [{ id: 1, firstname: "Kari" }],
};

describe("Bruker liste siden", () => {
  it("viser users in dom", async () => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    await act(async () => {
      ReactDOM.render(
        <MemoryRouter>
          <UserListPage userApi={userApi} />
        </MemoryRouter>,
        container
      );
    });
    expect(container.innerHTML).toMatchSnapshot();
    expect(container.querySelector("li").textContent).toEqual("Kari");
  });
});
