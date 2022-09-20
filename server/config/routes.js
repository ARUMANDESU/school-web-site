const users = require('../app/controllers/user');

module.exports = (server) =>{
    server.get('/users', users.getAll);
    server.post('/users', users.create);
    server.put('/users/:id', users.update);
    server.delete('/users/:id', users.remove)
};