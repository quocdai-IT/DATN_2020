"use strict";
const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const xemthi = sequelize.define(
    "xemthi",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
      },
      soluong: DataTypes.STRING,
      diadiem: DataTypes.STRING,
      thoigian: DataTypes.STRING,
      cbct: DataTypes.STRING,
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_bin",
      freezeTableName: true,
      tableName: "lichxemthi",
    }
  );
  return xemthi;
};