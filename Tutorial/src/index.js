const path = require("path");
const express = require("express");
const app = express();
const hbs=require("hbs");

//TO SEE THE DIRECTORY NAME AND join WITH ANOTHER DIRECTORY..
// console.log(__dirname);
// console.log(path.join(__dirname,"../public"));

const staticPath = path.join(__dirname, "../public");
const partialPath=path.join(__dirname,"../partials");

// To set the view Engine..!
app.set('view engine', 'hbs')

hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
    res.render("index",{
        data:"Notification",
    });
});


app.get("/about",(req,res)=>{   // This is the way of routing the about hbs file..
    res.render("about");
})
// Serving the static website, This is a middleware..
// app.use(express.static(staticPath));

const PORT = 8000;

app.get("/", (req, res) => {
    req.send("Hello World from the exptress JS site")
})


// app.get('/about', (req, res) => {
//     res.send("Wellcome to about page")
// })

app.listen(PORT, () => {
    console.log("Listining at port 8000");
})