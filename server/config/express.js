const bodyParser        = require('body-parser')

module.exports = (server) =>{
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({extended : true}));
};