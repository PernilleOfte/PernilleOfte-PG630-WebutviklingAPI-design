import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {FrontPage} from "./frontPage";
import {ProfilePage} from "./profilePage";
import React from "react";
import {fetchJson} from "./http";

export function Application() {
    async function loadProfile(){
    return fetchJson("/api/profile");
    }


    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <FrontPage/>
                </Route>

                <Route path={"/profile"}>
                    <ProfilePage loadProfile={loadProfile}/>
                </Route>

                <Route path={"/chat"}>
                    <h1>This is a chat</h1>
                </Route>

                <Route path={"/login"} exact>
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