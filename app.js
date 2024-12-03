const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views')

app.get("/", (req, res) => res.render('home.ejs'));
app.get("/noticias", (req, res) => res.render('noticias.ejs'));
app.get("/add_noticia", (req, res) => res.render("add_noticia.ejs"));

app.listen(3000, () => console.log("Servidor rodando: http://localhost:3000"));
