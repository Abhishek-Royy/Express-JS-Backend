const express = require ("express");

const app=express();

app.set("view engine","ejs");       //view engine setup
app.use(express.static("./public"))     //static folder setup

// app.get("/",(req,res)=>{
//     res.send("Hello from index.js")
// })

app.get("/",(req,res)=>{
    res.render("index")
})

const PORT= process.env.PORT || 5000;
app.listen(5000, console.log(`Listning from port http://localhost:${PORT}`));



