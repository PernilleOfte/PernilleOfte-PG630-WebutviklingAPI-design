import React from "react";

export function ErrorView({error}) {
    return (<div>
        <h1>Er feil har skjedd</h1>
        <div>{error.toString()}</div>;
    </div>);
}