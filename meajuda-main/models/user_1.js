const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('users', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    email: {
        type:Sequelize.STRING,
        allowNull: false,
    },

});
// Criar Tabela
User.sync();

//User.sync({alter:true}) TODO 

module.exports = User;