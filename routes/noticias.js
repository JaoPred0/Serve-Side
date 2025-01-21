const mysql = require('mysql');

module.exports = (app) => {
    // Rota para exibir as notícias
    app.get('/noticias', (req, res) => {
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'portal_noticias'
        });

        connection.query('SELECT * FROM noticias', (error, result) => {
            if (error) {
                console.error('Erro ao buscar notícias:', error);  // Exibe o erro completo no console
                res.status(500).send('Erro ao buscar notícias');
            } else {
                res.render('noticias', { noticias: result });  // Renderiza a página com as notícias
            }
        });
    });
};
