const express = require("express");
const app = express();
const mysql = require('mysql');
const noticiasRoutes = require('./routes/noticias'); // Importa as rotas

// Configuração do motor de visualização EJS
app.set('view engine', 'ejs');
app.set('views', './app/views');

// Usar as rotas de notícias
noticiasRoutes(app); // Aqui estamos passando o app para o arquivo de rotas

// Rota para a página inicial
app.get("/", (req, res) => res.render('home.ejs'));

// Rota para adicionar uma notícia
app.get("/add_noticia", (req, res) => res.render("add_noticia.ejs"));

// Inicia o servidor na porta 3000
app.listen(3306, () => console.log("Servidor rodando: http://localhost:3306"));
