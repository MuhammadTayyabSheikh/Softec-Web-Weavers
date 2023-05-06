const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false, required: true },
  image: { type: String, default: 'https://icon-library.com/images/2018/3209069_happy-meme-pepe-the-frog-drinking-coffee-transparent.png', required: true },
}, {
  timestamps: true,
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.isValidPassword = async function (newPassword) {
  return await bcrypt.compare(newPassword, this.password);
}

// function validateUser(data) {
//   const schema = Joi.object({
//     name: Joi.string().min(3).max(10).required(),
//     email: Joi.string().email().min(3).max(10).required(),
//     password: Joi.string().min(3).max(10).required(),
//   });
//   return schema.validate(data, { abortEarly: false });
// }
// function validateUserLogin(data) {
//   const schema = Joi.object({
//     email: Joi.string().email().min(3).max(10).required(),
//     password: Joi.string().min(3).max(10).required(),
//   });
//   return schema.validate(data, { abortEarly: false });
// }

const User = mongoose.model('User', userSchema);

module.exports = User;
// module.exports = validateUser; //for sign up
// module.exports = validateUserLogin; // for login
