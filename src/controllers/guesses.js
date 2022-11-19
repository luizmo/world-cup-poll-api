import { openDb } from "../configDB.js";

export default async function createTable(){
  openDb().then(async (db) => {
    await db.exec(`
      CREATE TABLE IF NOT EXISTS guesses (
        gameId INT NOT NULL,
        userId INT NOT NULL,
        PRIMARY KEY (gameId, userId),
        homeScore INT NOT NULL,
        guestScore INT NOT NULL,
        points INT,
      );
    `);
  }
}