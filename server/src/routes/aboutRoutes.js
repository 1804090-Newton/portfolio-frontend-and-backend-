const Router = require('koa-router');
const { handleGetAbout } = require('../controllers/aboutController');

const router = new Router();

router.get('/about', handleGetAbout);


module.exports = router.routes();
