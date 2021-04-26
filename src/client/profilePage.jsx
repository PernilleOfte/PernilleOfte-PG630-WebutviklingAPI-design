import React from "react";
import {Link} from "react-router-dom";

export function ProfilePage() {
    return <div>
    <h1>Your profile</h1>
    <ul>
        <Link to={"/chat"}>Chat</Link>
    </ul>
    </div>;
}