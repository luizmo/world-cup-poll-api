import { openDb } from './configDB.js';
import express from 'express';

const app = express();
const port = 5000;

openDb();

app.get('/', (req, res) => res.send('Copa do mundo 2022'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));