const express = require('express');
const router = express.Router(); 
const userController = require('../controllers/user.controller');

router
    .get('/get', userController.get )
    .get('/user/get/:id', userController.getById )
    .post('/user/store', userController.create )
    .put('/user/update/:id', userController.update )
    .delete('/user/delete/:id', userController._delete );

module.exports = router;
