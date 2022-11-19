import { openDb } from "../configDB.js";

export default async function createTable(){
  openDb().then(async (db) => {
    await db.exec(`
      CREATE TABLE IF NOT EXISTS games (
        id INT PRIMARY KEY AUTOINCREMENT,
        date DATE NOT NULL,
        homeTeam VARCHAR(3) NOT NULL,
        guestTeam VARCHAR(3) NOT NULL,
        homeScore INT,
        guestScore INT
      );
    `);
  }
}