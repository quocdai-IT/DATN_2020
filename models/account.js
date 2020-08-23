"use strict";
const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const account = sequelize.define(
    "account",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      emailAddress: DataTypes.STRING,
      passWord: DataTypes.STRING,
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_bin",
      freezeTableName: true,
      tableName: "account",
    }
  );

  account.associate = function (models) {
    account.belongsToMany(models.role, {
      through: "account_role",
      as: { singular: "role", plural: "role" },
      foreignKey: "memberId",
      onUpdate: "cascade",
      onDelete: "cascade",
      hooks: true,
    });
  };

  return account;
};
