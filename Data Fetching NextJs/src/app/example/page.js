import React from "react";

export default async function Page() {

    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();

    return (
        <div>
            <h1> Server Rendered Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}