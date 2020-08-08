"use strict";
const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define(
    "role",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
      },
      name: DataTypes.STRING,
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_bin",
      freezeTableName: true,
      tableName: "role",
    }
  );

  role.associate = function (models) {
    role.belongsToMany(models.account, {
      through: "account_role",
      as: { singular: "account", plural: "account" },
      foreignKey: "roleId",
      onUpdate: "cascade",
      onDelete: "cascade",
      hooks: true,
    });
  };
  return role;
};
