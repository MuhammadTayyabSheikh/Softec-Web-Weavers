const User = require('../models/User');
const { generateToken } = require('../utils/token');

const register = async (req, res) => {
  try {
    const { name, email, password, dob, gender } = req.body;
    console.log(req.body)

    const user = await User.create({
      name,
      email,
      password,
      dob,
      gender,
    });

    const token = generateToken({
      id: user._id,
      name: user.name,
      role: user.isAdmin ? 'admin' : 'user',
    });

    res.status(201).json({ token, message: 'Registered successfully!' });
  } catch (error) {
    console.log('auth/register error: ', error);
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await user.isValidPassword(password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect email or password' });
    }

    const token = generateToken({
      id: user._id,
      name: user.name,
      role: user.isAdmin ? 'admin' : 'user',
    });

    console.log('auth/login token: ', token);

    res.status(200).json({ token, message: '' });
  } catch (error) {
    console.log('auth/login error: ', error);
    res.status(500).json({ message: error.message });
  }
};

const updatePassword = async (req, res) => {
  try {
    const { id } = req.user;
    const { oldPassword, newPassword } = req.body;

    const user = User.findById(id);

    const isMatch = await user.isValidPassword(oldPassword);

    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect password' });
    }

    user.password = newPassword;

    await user.save();

    res.status(200).json({ message: 'Password updated successfully!' });
  } catch (error) {
    console.log('auth/updatePassword error: ', error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  register,
  login,
  updatePassword,
};
