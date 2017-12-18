require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const app = express();
const comics_contoller = require('./controller/comics_controller'); 

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then((db) => {
    console.log("DB connected")
    app.set('db', db);
})


app.put('/api/comics', comics_contoller.updateComic)
app.delete('/api/comics/:id', comics_contoller.deleteComic)
app.post('/api/comics', comics_contoller.addComic)
app.get('/api/comics', comics_contoller.showComic)

const PORT = 8080;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
