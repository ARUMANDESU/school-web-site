const express           = require('express');
const server            = express();
const mongoose          = require('mongoose');
const dotenv            = require('dotenv');    dotenv.config();
const port              = process.env.PORT || 5000;
const config            = require('./config/server');

mongoose.connect(process.env.mongeDbURI)
    .then((res) => console.log('Connected to DB'))
    .catch(error => console.log(error))

config.express(server);
config.routes(server);

//passport authentication

const cors              = require('cors');
const passport          = require('passport');
const passportLocal     = require('passport-local').Strategy;
const cookieParser      = require('cookie-parser');
const session           = require('express-session');


server.use(cookieParser(process.env.cookieSecret))
server.use(session({
    secret: process.env.sessionSecret,
    resave: true,
    saveUninitialized: true
}));
server.use(cors({
    origin: process.env.reactAppUrl,
    credentials: true,
}));


server.post('/login',((req, res) => {
    res.json('login');
}));

//passport authentication

server.listen(port, ()=>{console.log(`Server listening on port ${port}!`)});