const {mongoose} = require('../../config/app.config');
const mongoosePaginate = require('mongoose-paginate');
// const passportLocalMongoose = require('passport-local-mongoose');
import bcrypt from 'bcryptjs';
// const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  firstName: {type: String, required: true, minlength: 3, maxlength: 25},
  lastName: {type: String, required: false, minlength: 3, maxlength: 25},
  email: {
    type: String,
    required: [true, 'Email is required'],
    useCreateIndex: true,
    match: [/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      'Please fill a valid email address']
  },
  avatar: {type: String, default: 'avatar img url'},
  role: {type: String, enum: ['SuperUser', 'Administrator', 'User'], default: 'User'},
  phone: {type: String},
  address: {type: String, minlength: 5, maxlength: 25},
  password: {type: String, minlength: 1, maxlength: 25},
});

// UserSchema.plugin(passportLocalMongoose);
UserSchema.plugin(mongoosePaginate);

UserSchema.methods = {
  checkPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword(plaintTextPassword){
    return bcrypt.hashSync(plaintTextPassword, 10);
  }
};

UserSchema.pre('save', function(next) {
  console.log('saving');
  if (!this.password) {
    console.log('models/user.model.js ---- No password provided ----');
    next();
  } else {
    console.log('models/user.model.js hashPassword in pre save');
    this.password = this.hashPassword(this.password);
    next();
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
