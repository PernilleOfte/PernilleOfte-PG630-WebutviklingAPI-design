import React from "react";
import {Link} from "react-router-dom";
import {useLoading} from "./useLoading";
import {LoadingView} from "./loadingView";
import {ErrorView} from "./errorView";


export function ProfilePage({loadProfile}) {
    const {loading, error, data} = useLoading(async() => await loadProfile());

    if (loading){
        return <LoadingView/>
    }

if(error){
    return <ErrorView error={error}/>
}



    return <div>
    <h1>Your profile</h1>
        <div>{data.username}</div>
    <ul>
        <Link to={"/chat"}>Chat</Link>
    </ul>
    </div>;
}