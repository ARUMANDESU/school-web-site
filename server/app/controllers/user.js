const mongoose = require('mongoose');
const User = require('../models/user')

const getAll =async (req, res) => {
    await User.find()
        .exec()
        .then(users => res.json(users))
        .catch(err => res.status(500).json(err))
};

const create = async (req, res) => {
    await User.create(req.body)
        .then(createUser => res.json(createUser))
        .catch(err => res.status(500).json(err))
};

const update = async(req, res) => {
    await User.findOneAndUpdate({id: req.params.id}, req.body)
        .exec()
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err))
};

const remove = async(req, res) => {
    await User.deleteOne({id: req.params.id})
        .exec()
        .then(() => res.json({success:true}))
        .catch(err => res.status(500).json(err))
};

module.exports = {
    getAll,
    create,
    remove,
    update
};