const router = require('express').Router();

router.get('/', function(req, res, next) {
    req.session.destroy();
    res.redirect('/login');
});

module.exports = router;