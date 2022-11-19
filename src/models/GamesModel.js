import { DataTypes, Sequelize } from "sequelize"
import sequelize from "../configDB"

const Games = sequelize.define('Games', {
  id: {
    type: Sequelize.INT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  homeTeam: DataTypes.STRING,
  guestTeam: DataTypes.STRING,
  homeScore: DataTypes.INT,
  guestScore: DataTypes.INT,
  date: DataTypes.DATE
})