import React, {useEffect, useState} from "react";
import {LoadingView} from "./loadingView";
import {ErrorView} from "./errorView";


export function UserListPage() {
    const [users, setUsers] = useState()
    const [error, setError] = useState()

    async function loadUsers() {
        try{
        const res = await fetch("/api/users");
        if (!res.ok) {
            throw new Error(`Something went wrong ${rs.url}:${res.statusText}`);
        }
        const json = await res.json();
        setUsers(json);
    } catch (e) {
        setError(e);
    }
}

    useEffect(loadUsers, []);

    if(error){
        return <ErrorView error={error}/>
    }
    if(!users) {
        return <LoadingView/>
    }

    return (
        <>
    <h1>All users</h1>
        {users.map(({users}) => (
            <li>{users.firstname}</li>
                ))};
    </>
)};
