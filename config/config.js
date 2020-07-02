module.exports = {
  dev: {
    username: "root",
    password: "root",
    database: "UTC2",
    host: "localhost",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: "root",
    database: "UTC2",
    host: "localhost",
    dialect: "mysql",
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  },
};
