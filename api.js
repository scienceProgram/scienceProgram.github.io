const express = require('express');
const PORT = 5000;
const cors = require('cors');
const body = require("body-parser");

const app = express();
app.use(cors());
app.use(body());

var c = {
    image: ''
}


app.post('/', (req, res) => {
    c.image = req.body.link;

    res.status(200).send();
});

app.get('/', (req, res) => {
    res.status(200).send(c);
});


app.listen(PORT, () => {
    console.log("Listening on PORT: " +  PORT);
});
