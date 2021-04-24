var express = require('express');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
// or redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }

const flower_controlers = require('../controllers/flower');
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('flower', { title: 'Search Results flower' });
// });
router.get('/', flower_controlers.flower_view_all_Page);

module.exports = router;

/* GET detail flower page */
router.get('/detail', flower_controlers.flower_view_one_Page);
/* GET create costume page */
router.get('/create', flower_controlers.flower_create_Page);
/* GET create update page */
router.get('/update',secured, flower_controlers.flower_update_Page);
/* GET create costume page */
router.get('/delete', flower_controlers.flower_delete_Page);


