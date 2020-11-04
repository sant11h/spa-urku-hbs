const express = require("express");
const hbs = require("hbs");
const app = express();

//Puerto para que Heroku escuche
const port = process.env.port || 3000;

//Express HBS Engine
hbs.registerPartials(__dirname + "/views/partials")
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/assets" ));

//Gets
app.get("/", (req,ans) => {
    ans.render("partials/index");
});

app.get("/about", (req, ans) =>{
    ans.render("partials/about");
})

app.get("/contact", (req, ans) =>{
    ans.render("partials/contact");
})

app.get("/blog", (req, ans) =>{
    ans.render("partials/blog");
})

app.get("/portfolio", (req, ans) =>{
    ans.render("partials/portfolio");
})

console.log(`Listening port ${port}`);
app.listen(port);