const User = require('../models/User');

exports.register = async (req, res) => {
    const { name, email, password, address } = req.body;
    try {
        const newUser = new User({ name, email, password, address });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        res.status(200).json({ message: 'Login successful' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
