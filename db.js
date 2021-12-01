const {Sequelize} = require('sequelize');

const db = new Sequelize("postgres://postgres:CmoodY98!59@localhost:5432/animal-server");

module.exports = db;