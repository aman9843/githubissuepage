const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const fileupload = require("express-fileupload");
app.use(fileupload());




const cors = require('cors');
app.use(cors());





dotenv.config({path: './config.env'});
require('./db/Conn');

app.use(express.json()); 

app.use(require('./router/auth'));
app.use(bodyParser.json())

const port = process.env.PORT || 3003;







app.get('/', (req,res) => {

    res.send(`hello world`)

});





 

app.listen(port, () => {
    console.log(`server is running at port ${port}`);

})