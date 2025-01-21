	### Criar banco de dados
	CREATE DATABASE portal_noticias;

	### Abri banco e criar tabelas
	USE portal_noticias;

	### Para criar a tabela
	CREATE TABLE noticias (
    id_noticia INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    noticia TEXT,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

	### Para inserir uma notícia na tabela
	INSERT INTO noticias(titulo, noticia) VALUES ("Primeira notícia", "O Portal foi lançado");


	### Para ver os registro da tabela
	SELECT * FROM noticias;
