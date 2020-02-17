const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = {
    async auth(req, res) {
        const { email, password } = req.body;

        if(await User.findOne({ email })) {
            
        }
    }
}