import React from "react";
import {Link} from "react-router-dom";

export function FrontPage() {
    return<div>
        <h1>Front page</h1>

        <ul>
            <Link to={"/login"}>Log in</Link>
        </ul>
        <ul>
            <Link to={"/profile"}>Profile</Link>
        </ul>
    </div>  ;
}