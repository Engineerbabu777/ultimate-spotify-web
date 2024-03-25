// @license Apache-2.0

"use strict";

// PACKAGES
const cors = require('cors');
const cookieParser = require('cookie-parser');


// EXPRESS APP
const express = require('express');
const app = express();

// EJS SETTINGS!
app.set("view engine", "ejs");

// STATIC DIRECTORY!
app.use(express.static(`${__dirname}/public`))


// ENABLED CORS AND COOKIE PARSER!
app.use(cors()).use(cookieParser());
app.get('/login', async(req,res) => {
    res.send(`Login`)
})

app.listen(4444, ()=> {
    console.log("Listening on server PORT:4444")
})