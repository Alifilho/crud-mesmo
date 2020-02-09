const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const users = await User.find();

        res.json(users);
    },

    async store(req, res) {

    },

    async update(req, res) {

    },

    async destroy(req, res) {

    }
}