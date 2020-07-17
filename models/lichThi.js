"use strict";
const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const lichthi = sequelize.define(
    "lichthi",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      mssv: DataTypes.STRING,
      lop: DataTypes.STRING,
      ngayThi: DataTypes.STRING,
      phongThi: DataTypes.STRING,
      lopHocPhan: DataTypes.STRING,
      giothi:  DataTypes.STRING,
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_bin",
      freezeTableName: true,
      tableName: "LichThi",
    }
  );

  return lichthi;
};
