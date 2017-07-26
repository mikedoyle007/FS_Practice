// create connection to db
const Sequelize = require('sequelize');

const db = new Sequelize('postgres://afnrfkap:hgaexNf3UKGwHsWuFqvjh6ksERM6DQkZ@babar.elephantsql.com:5432/afnrfkap', {
  dialect: 'postgress',  
});
console.log('Connected to remote db');

module.exports = db;
