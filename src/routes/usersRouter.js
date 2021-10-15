const express = require('express');
const router = express.Router();
const {registro, processUser, user, destroy} = require('../controllers/userController');
const validate = require('../middlewares/validate')

/* GET users listing. */
router.get('/register', registro);
router.post('/register', validate, processUser);

router.get('/usuario', user);
router.get('/destroy', destroy);

module.exports = router;