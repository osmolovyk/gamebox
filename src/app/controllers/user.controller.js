import ResponseException from '../services/ResponseException';
const UserService = require('../services/user.services');


exports.createUser = async function(req, res, next) {
  try {
    console.log('Creating new User');
    let newUser = await UserService.createUser(req, res, next);
    return res.status(201).json({status: 201, data: newUser, message: 'User Created Successfully'});

  }catch(e){
    // if (e.code === 400)
    //   return res.status(400).json({status: 400, message: e.message});
    if(e instanceof ResponseException && e.code === 409)
      return res.status(409).json({status: 409, message: e.message});

    return res.status(400).json({status: 400, message: e.message});
  }
};

exports.getUsers = async function(req, res) {
  try {
    let users = await UserService.getUsers(req);
    // Return the users list with the appropriate HTTP Status Code and Message.
    return res.status(200).json({status: 200, data: users, message: 'Successfully Users Received'});

  } catch(e) {

    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({status: 400, message: e.message});
  }
};

exports.authenticate = function(req, res) {
  try {
    const user = {
      id: req.user._id,
      email: req.user.email,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      phone: req.user.phone
    };
    res.status(200).json({status: 200, user: user, message: 'Authenticate successfully'});
  } catch(e) {

    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({status: 400, message: e.message});
  }
};

exports.getUser = function(req, res){
  try {
    if (req.user){
      const user = {
        id: req.user._id,
        email: req.user.email,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        phone: req.user.phone
      };
      res.status(200).json({status: 200, user: user, message: 'Authenticate granted'});
    } else {
      return res.status(403.21).json({status: 403.21, message: 'Source access denied'});
    }
  } catch(e) {
    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({status: 400, message: e.message});
  }
};

exports.updateUserInfo = async function(req, res) {
  try {
    let user = await UserService.updateUser(req);
    return res.status(201).json({status: 201, user: user, message: 'User updated successfully'});

  } catch (e) {
    return res.status(409).json({status: 409, message: e.message});
  }
};

exports.updateUserPassword = async function(req, res){
  try {
    UserService.updateUserPassword(req);
    return res.status(200).json({status: 200, message: 'Password updated successfully'});

  } catch (e) {
    return res.status(409).json({status: 409, message: e.message});
  }
};

exports.updateUserRole = async function (req, res) {
  try {
    let user = await UserService.updateUserRole(req);
    return res.status(201).json({status: 201, user: user, message: 'User role was successfully changed'});
  } catch (e) {
    return res.status(400).json({status: 400, message: e.message});
  }
};

exports.updateUserStatus = async function (req, res) {
  try {
    let user = await UserService.updateUserStatus(req);
    return res.status(201).json({status: 201, user: user, message: 'User status was successfully changed'});
  } catch (e) {
    return res.status(400).json({status: 400, message: e.message});
  }
};

exports.rateUser = async function (req, res) {
  try {
    let user = await UserService.rateUser(req);
    return res.status(201).json({status: 201, user: user, message: 'User was successfully rated'});
  } catch (e) {
    return res.status(400).json({status: 400, message: e.message});
  }
};

exports.getUserRating = async function (req, res) {
  try {
    let rating = await UserService.getUserRating(req);
    return res.status(201).json({status: 201, rating: rating, message: 'Rating received'});
  } catch (e) {
    return res.status(400).json({status: 400, message: e.message});
  }
};

exports.banUser = async function (req, res) {
  try {
    let user = await UserService.banUser(req);
    return res.status(201).json({status: 201, user: user, message: 'User was successfully banned'});
  } catch (e) {
    return res.status(400).json({status: 400, message: e.message});
  }
};


exports.logout = async function(req, res) {
  req.logout();
  res.redirect('/');
};

exports.checkAuth = function (req, res, next){
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};
