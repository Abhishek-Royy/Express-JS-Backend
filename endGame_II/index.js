const express = require("express");
const session=require("express-session");
const flash=require("connect-flash");
const froutes=require("./routes/firstRouter");
const path=require("path");

const app=express();

// VIEW ENGINE SETUP
app.set("view engine","ejs");

// STATIC FILE SETUP
app.set(express.static('./public'));        // PROBLEM

app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:"hello hello"
}));

app.use(flash());


app.use('/',froutes);



PORT=process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log(`Connect to http://localhost:${PORT}`);
});