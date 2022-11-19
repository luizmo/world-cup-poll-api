import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../configDB";

const User = sequelize.define('User', {
  id: {
    type: Sequelize.INT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  username: DataTypes.STRING,
})