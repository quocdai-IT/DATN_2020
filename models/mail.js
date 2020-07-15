"use strict";
const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const mail = sequelize.define(
    "mail",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
      },
      name: DataTypes.STRING,
      mssv:{ 
        type: DataTypes.STRING,  
        primaryKey: true,
      },
      email: DataTypes.STRING
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_bin",
      freezeTableName: true,
      tableName: "Mail",
    }
  );
  mail.associate = function(models) {
    mail.hasMany(models.lichthi);
  }
  return mail;
};
