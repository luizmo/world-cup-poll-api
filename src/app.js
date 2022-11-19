
import express from 'express';

const app = express();
const port = 5000;



app.get('/', (req, res) => res.send('Copa do mundo 2022'));

app.get('/games', (req, res) => res.send(

));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));