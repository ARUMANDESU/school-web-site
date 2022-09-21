const express       = require('express');
const server        = express();
const mongoose      = require('mongoose');
const dotenv        = require('dotenv');    dotenv.config();
const port          = process.env.PORT || 5000;
const config        = require('./config/server');

mongoose.connect(process.env.mongeDbURI)
    .then((res) => console.log('Connected to DB'))
    .catch(error => console.log(error))

config.express(server);
config.routes(server);


server.listen(port, ()=>{console.log(`Server listening on port ${port}!`)});