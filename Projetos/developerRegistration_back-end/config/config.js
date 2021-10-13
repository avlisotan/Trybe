// require('dotenv/ config');
require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.MYSQL_USER || "root",
    "password": process.env.MYSQL_PASSWORD || '',
    "database": "api-devs",
    "host": process.env.MYSQL_HOST || "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.MYSQL_USER || "root",
    "password": process.env.MYSQL_PASSWORD || '',
    "database": "api-devs",
    "host": process.env.MYSQL_HOST || "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.MYSQL_USER || "root",
    "password": process.env.MYSQL_PASSWORD || '',
    "database": "api-devs",
    "host": process.env.MYSQL_HOST || "127.0.0.1",
    "dialect": "mysql"
  },
}
