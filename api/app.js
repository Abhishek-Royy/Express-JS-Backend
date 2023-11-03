const express=require("express");
const hbs=require("hbs");
const app=express();


app.get("/",(req,res)=>{
    res.send("Hello from Api intro page");
})

app.set('view engine', 'hbs');

app.get("/email",(req,res)=>{
    res.render("email",{        //This is the code to make like API.
        user:req.query.name,
        age:req.query.age       //In this way we can send multiple query.
    });
})

const PORT=3000;
app.listen(PORT,()=>{
    console.log("Connecting with Port "+PORT);
})