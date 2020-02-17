const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = {
    async index(req, res) {
        const users = await User.find();
        
        res.json(users);
    },

    async store(req, res) {
        let { email, name, cpf, birthday, password } = req.body;

        password = bcrypt.hashSync(password, 5);

        if(!await User.findOne({ email })) {
            let user = User.create({
                email, 
                password, 
                name, 
                cpf,
                birthday
            });

            user ? res.status(201).json({ message: 'User created successfully' }) : res.status(400).json({ message: 'Error registering user' });
        } else {
            res.status(409).json({ message: 'User already exists' });
        }
    },

    async update(req, res) {
        const { email, password, cpf, name, birthday } = req.body;

        if(await User.findOne({ email })) {
            let values = { email, password, cpf, name, birthday };

            let updates = {};

            for(var prop in values) {
                if(values[prop] != null && prop != 'email') {
                    updates[prop] = values[prop];

                }
            }

            if(updates.password != undefined) {
                updates.password = bcrypt.hashSync(updates.password, 5);
            }

            let user = User.updateOne({ email }, updates, (err, result) => {}); 

            user ? res.status(201).json({ message: `Data: [${Object.keys(updates)}] updated successfully` }) : res.status(400).json({ message: 'Error updating information' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    },

    async destroy(req, res) {
        const { email } = req.query;

        if(await User.findOne({ email })) {
            let user = await User.deleteOne({ email });

            user ? res.status(201).json({ message: 'User deleted successfully' }) : res.status(400).json({ message: 'Error deleting user' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    }
}