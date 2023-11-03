const express = require("express");
const app = express();

const port = 3000;

/* Multiple nav bar page :- Home , About, Contact  */

app.get("/", (req, res) => {        //We cxan write html code also
    // res.send("This is the home page..")
    res.write("<h1>Wellcome to Home Page</h1>")
    res.write("<h1>View the whole Home Page</h1>")
    res.send();
})

app.get("/about", (req, res) => {
    res.send("This is the About page..")
})

app.get("/contact", (req, res) => {
    res.send("This is the Contact page..")
})

app.get("/temp", (req, res) => {        //We can send JSON data also....
    res.send([
        {
            id: 1,
            city: "Mumbai",
            temp: 39,
            humidity: 1200
        },
        {
            id:2,
            city:"Kolkata",
            temp:41,
            humidity:1400
        },
        {
            id:4,
            city:"Japan",
            temp:28,
            humidity:900
        }
    ])
})


app.listen(port, () => {
    console.log(`Connect with Port Number ${port}`)
})