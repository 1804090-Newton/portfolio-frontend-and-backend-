const Router = require('koa-router');
const { handleCreateContact } = require('../controllers/contactController');

const router = new Router();

router.post('/contact', handleCreateContact);

module.exports = router.routes();
