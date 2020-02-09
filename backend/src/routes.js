const express = require('express');
const router = express.Router();
const UserController = require('./controllers/UserController');

router.get('/users', UserController.index);
router.post('/users', UserController.store);
router.put('/users', UserController.update);
router.delete('/users', UserController.destroy);

module.exports = router;