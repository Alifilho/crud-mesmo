const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = {
    async auth(req, res) {
        const { email, password } = req.body;

        let user = await User.findOne({ email });

        if(user) {
            if(bcrypt.compareSync(password, user.password)) {
                
            }
        }
    }
}