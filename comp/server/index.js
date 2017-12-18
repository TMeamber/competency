require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const app = express();
const PORT = 3005;


app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))

massive(process.env.CONNECTION_STRING).then((db) => {
    console.log("DB connected")
    app.set('db', db);
})


app.put('/api/comics', comics_contoller.updateComic)
app.delete('/api/comics', comics_contoller.dleteComic)
app.post('/api/comics', comics_contoller.addComic)
app.get('/api/comics', comics_contoller.showComic)


app.listen(PORT, () => console.log(`Listening on ${PORT}`));
