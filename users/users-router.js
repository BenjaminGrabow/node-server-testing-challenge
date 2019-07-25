const router = require('express').Router();
const User = require('./users-model');

router.get('/users', (req, res) => {
 User.find()
 .then(users => {
   res.json(users);
 })
 .catch(err => res.send(err));
});

module.exports = router;