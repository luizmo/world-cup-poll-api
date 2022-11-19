//import sqlite3 from 'sqlite3'
//import { open } from 'sqlite'

//export async function openDb () {
//  return open({
//    filename: './database.db',
//    driver: sqlite3.Database
//  })
//}

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

export default sequelize  