const users         = require('../app/controllers/user');
const auth          = require('../app/controllers/auth')
module.exports = (server) =>{
    server.get('/users', users.getAll);
    server.post('/users', users.create);
    server.put('/users/:id', users.update);
    server.delete('/users/:id', users.remove);

    server.post('/register', auth.register);
};