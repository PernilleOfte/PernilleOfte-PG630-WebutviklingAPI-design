import React from "react";
import {Link} from "react-router-dom";
import {UseLoading} from "./useLoading";
import {LoadingView} from "./loadingView";
import {ErrorView} from "./errorView";


export function ProfilePage({loadProfile}) {
    const {loading, error, data} = UseLoading(async() => await loadProfile());

    if (loading){
        return <LoadingView/>
    }

if(error){
    return <ErrorView error={error}/>
}



    return <div>
    <h1>Your profile</h1>
        <div> <img src={data.picture}/></div>
        <div>{data.name}</div>
        <ul>
            <Link to={"/register"}>Lag en bruker</Link>
        </ul>
    <ul>
        <Link to={"/chat"}>Chat</Link>
    </ul>

            <ul>
                <Link to={"/users"}>Liste over brukere</Link>
            </ul>

    </div>;
}