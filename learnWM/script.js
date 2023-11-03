const express = require('express');
const app=express();

//Middleware..
app.use((req,res,next)=>{
    console.log("Hello middleware")
    next();
})
//We can create multiple middleware.

//----------------------------------------------
// Templete Engine
app.set("view engine", "ejs");

// Static file Setup
app.use(express.static('./public'))

app.get("/",(req,res)=>{
    // res.send("Hello from express")
    res.render("index")
})


// ERROE HANDELER
app.get("/error",(req,res,next)=>{
    throw Error("Some thing Went wrong")
})

app.get("/about",(req,res)=>{
    // res.send("Hello from About page")
    res.render("about",{name:"CodeByAbhishek"})
})

/* app.get("/about/abhishek",(req,res)=>{      //This is a static routing
    res.send("Hello from Abhishek in About page")
})*/


app.get("/about/:username",(req,res)=>{        //This is call Dynamic Routing.
    res.send(`Hello from ${req.params.username}`)
})



// USE ERROR HANDELER
app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  })
app.listen(3000)