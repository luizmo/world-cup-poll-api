import { DataTypes, Sequelize } from "sequelize"
import sequelize from "../configDB"

const Guesses = sequelize.define('Guesses', {
  gameId: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  homeScore: DataTypes.INT,
  guestScore: DataTypes.INT,
  points: DataTypes.INT
})
