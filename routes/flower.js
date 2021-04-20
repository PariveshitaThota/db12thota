var express = require('express');
var router = express.Router();

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
router.get('/update', flower_controlers.flower_update_Page);
/* GET create costume page */
router.get('/delete', flower_controlers.flower_delete_Page);


