require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const app = express();
const session = require('express-session');
const comics_contoller = require('./controller/comics_controller'); 

app.use(bodyParser.json());
app.use(session({
    secret: 'weknow',
    resave: false,
    saveUninitialized: true
}))

massive(process.env.CONNECTION_STRING).then((db) => {
    console.log("DB connected")
    app.set('db', db);
})


app.put('/api/comics/update/:id', comics_contoller.update) 
app.delete('/api/comics/delete/:id', comics_contoller.delete)
app.post('/api/comics/create', comics_contoller.create)
app.get('/api/comics/get', comics_contoller.getAll)

const PORT = 8080;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
