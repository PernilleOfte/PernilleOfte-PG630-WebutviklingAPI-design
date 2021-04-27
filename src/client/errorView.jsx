import React from "react";

export function ErrorView({error, reload}) {
    return (
        <>
        <div>
        <h1>Er feil har skjedd</h1>
        <div>{error.toString()}</div>
            {reload && <button onClick={reload}>Prøv igjen</button> };
    </div>
        </>);
}