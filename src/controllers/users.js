import { openDb } from "../configDB.js";

export default async function createTable(){
  openDb().then(async (db) => {
    await db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INT PRIMARY KEY AUTOINCREMENT,
        username VARCHAR(255) NOT NULL,
      );
    `);
  }
}