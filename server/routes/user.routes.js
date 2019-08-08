const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controller');
const jwtHelper = require('../config/jwtHelper');

router.post('/register', user.register);
router.post('/authenticate', user.authenticate);
router.get('/profile', jwtHelper.verifyJwtToken, user.userProfile);

router.get('/users', user.getUsers);
router.get('/user/:id', user.getUser);
router.put('/user/:id', user.editUser);

router.get('/forgot', user.getForgot);
router.post('/forgot', user.postForgot);
router.get('/reset/:token', user.getReset);
router.post('/reset/:token', user.postReset);


module.exports = router;