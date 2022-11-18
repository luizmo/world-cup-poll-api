import { openDb } from "../configDB.js";

export default async function createTable(){
  openDb().then(async (db) => {
    await db.exec(`
      CREATE TABLE IF NOT EXISTS pool (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        homeTeam TEXT NOT NULL,
        awayTeam TEXT NOT NULL,
        date TEXT NOT NULL
      );
    `);
  }
}