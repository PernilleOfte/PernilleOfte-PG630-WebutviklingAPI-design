import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {FrontPage} from "./frontPage";
import {ProfilePage} from "./profilePage";
import React, {useState} from "react";
import {fetchJson} from "./http";
import {LoginPage} from "./loginPage";
import {LoginCallback} from "./loginCallback";
import {CreateUser} from "./createUser";
import {UserListPage} from "./userListPage";
import {ChatApplication} from "./chatApplication";

export function Application() {
    const [access_token, setAccess_token] = useState();

    const googleIdentityProvider = {
        discoveryURL: "https://accounts.google.com/.well-known/openid-configuration",
        client_id: "896911220685-japahfv84ni3vcvesbpsogs9l34vobbr.apps.googleusercontent.com",
    };


    async function loadProfile(){
    return fetchJson("/api/profile", {
        headers: {
            ...(access_token ? { Authorization: `Bearer ${access_token} `}
                : {}),
        },

        });
    }


    const userApi = {
        listUsers: async () => {
            const res = await  fetch("/api/users");
            if(!res.ok){
                throw new Error(
                    `Something went wrong loading ${res.url}: ${res.statusText}`
                );
            }
        }
    };

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
                    <ChatApplication/>
                </Route>

                <Route path={"/login"} exact>
                    <LoginPage identityProvider={googleIdentityProvider}/>
                </Route>

                <Route path={"/login/callback"}>
                    <h1><LoginCallback
                        identityProvider={googleIdentityProvider}
                        onAccessToken={(access_token) => setAccess_token(access_token)}
                    /></h1>
                </Route>

                <Route path={"/users"}>
                    <UserListPage userApi={userApi}/>
                </Route>

                <Route path={"/create"}>
                    <CreateUser/>

                </Route>

                <Route>
                    <h1>Page not found</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    );

}