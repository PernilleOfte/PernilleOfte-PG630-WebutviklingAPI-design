import React, {useState} from "react";
import {Link} from "react-router-dom";

export function CreateUser() {
    const [firstname,setFirstname]= useState()
    const [lastname, setLastname]= useState()
    const [email, setEmail]= useState()

    async function submit(e){
        e.preventDefault();
        console.log("Submitting")
        await fetch("/api/user", {
            method: "POST",
            body: JSON.stringify({firstname,lastname,email}),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }


    return <form onSubmit={submit}>
        <h1>Create user</h1>
        <div>
            <label>First name:<input type="text"value={firstname} onChange={e => setFirstname(e.target.value)}/></label>
        </div>
        <div>
            <label>Last name:<input type="text"value={lastname} onChange={e => setLastname(e.target.value)}/></label>
        </div>
        <div>
            <label>Email:<input type="text"value={email} onChange={e => setEmail(e.target.value)}/></label>
        </div>
        <button>Submit</button>

        <div>
            <ul>
                <Link to={"/users"}>Liste over brukere</Link>
            </ul>
        </div>
    </form>

}