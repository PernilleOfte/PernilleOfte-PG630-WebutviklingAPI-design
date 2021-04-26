const express = require("express");
const path = require("path");
const fetch = require("node-fetch");
const bodyparser = require("express");

const app = express();

const users = [
    {
        firstname: "",
        lastname: "",
        email: ""
    },
];

const discoveryURL = "https://accounts.google.com/.well-known/openid-configuration";

async function fetchJson(url,options) {
    const res = await fetch(url, options);
    if(!res.ok) {
        throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
    }
    return await res.json();
}
app.use(async (req,res,next)=> {
    const authorization = req.header("Authorization");
    if (authorization) {
        const {userinfo_endpoint} = await fetchJson(discoveryURL);
        req.userinfo = await fetchJson(userinfo_endpoint, {
            headers: {
                Authorization: authorization,
            },
        });
    }
    next();
});

app.get("/api/profile", async (req,res,next)=> {
    if (!req.userinfo) {
        return res.send(401);
    }
    return res.json(req.userinfo)

});

app.use(bodyparser.json());
app.use(express.static(path.resolve(__dirname, "..", "..", "dist")));


app.get("/api/users", (req, res) => {
    console.log(users);
    res.json(users);
});



app.post("/api/users", (req, res) => {
    const { firstname, lastname, email } = req.body;
    console.log(req.body);
    users.push({ firstname, lastname, email, id: users.length + 1 });
    res.status(201);
    res.end();
});


app.use((req,res,next)=> {
    if(req.method === "GET" && !req.path.startsWith("/api")) {
    return res.sendFile(
        path.resolve(__dirname, "..", "..", "dist", "index.html")
    );
}next();

});




app.listen(3000, () =>{
    console.log("Started on http://localhost:3000");



});