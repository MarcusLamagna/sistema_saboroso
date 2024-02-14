// Tutorial de uso no "msql2" - https://www.npmjs.com/package/mysql2

// Importando o msql2
const mysql = require("mysql2");

// Criando conexão com o banco de dados (database)
const connection = mysql.createConnection({
  host: "localhost",
  user: "user",
  database: "saboroso",
  password: "password",
});

// Fazendo o exporte para quem fez a chamada
// passando o nosso objeto de conexão ("connection" que é o nome da const)
module.exports = connection;
