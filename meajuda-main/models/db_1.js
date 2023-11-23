const Sequelize = require('sequelize');

const sequelize = new Sequelize ("app", "root", "catolica",{
    host:'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log("Conexao Sucesso");
}).catch(function(){
    console.log("Erro sem conexao cm DB");
});

module.exports = sequelize;