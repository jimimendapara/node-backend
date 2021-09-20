module.exports = {
    HOST: "creditcard.c9dmvdty4qbu.ap-southeast-2.rds.amazonaws.com",
    USER: "jimimendapara",
    PASSWORD: "mendapara123",
    DB: "testdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };