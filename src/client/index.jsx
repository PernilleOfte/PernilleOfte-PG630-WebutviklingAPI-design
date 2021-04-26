import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {FrontPage} from "./frontPage";
import {ProfilePage} from "./profilePage";

function Application() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <FrontPage/>
                </Route>

                <Route path={"/profile"}>
                    <ProfilePage/>
                </Route>

                <Route path={"/chat"}>
                    <h1>This is a chat</h1>
                </Route>

                <Route path={"/login"}>
                    <h1>Login</h1>
                </Route>

                <Route path={"/login/callback"}>
                    <h1>Login Callback</h1>
                </Route>

                <Route>
                    <h1>Page not found</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    );

}

ReactDom.render(<Application/>, document.getElementById("root"));