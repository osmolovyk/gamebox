import express from 'express';
const router = express.Router();
const passport = require('passport');

// Importing Controller
import UserController from '../controllers/user.controller';
import ProductController from '../controllers/product.controller';
import ArticleController from '../controllers/article.controller';

router.post('/',UserController.createUser);
router.post('/login', passport.authenticate('local'), UserController.authenticate);
router.get('/', UserController.getUsers); // Get list of all users
router.get('/:id', UserController.getUser); // Get user by it's id

router.get('/:id/articles', ArticleController.getUserArticles); //Get articles list of a user
router.get('/:id/products', ProductController.getUserProducts); //Get products list of a user

router.put('/', UserController.updateUserInfo); //Update user data without password
router.put('/password', UserController.updateUserPassword); //Change user password
router.put('/role', UserController.updateUserRole); //Change user role
router.put('/status', UserController.updateUserStatus); //Change user status


router.post('/logout', (req, res) => {
  if (req.user) {
    req.logout();
    res.send({ msg: 'logging out' });
  } else {
    res.send({ msg: 'no user to log out' });
  }
});

// router.get('/logout',UserController.logout);

router.get('/profile',
  UserController.checkAuth,
  (req, res) => {
    res.send('profile page');
  });


module.exports = router;
