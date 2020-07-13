"use strict";
const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const mail = sequelize.define(
    "mail",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      mssv: DataTypes.STRING,
      email: DataTypes.STRING
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_bin",
      freezeTableName: true,
      tableName: "Mail",
    }
  );

  return mail;
};
