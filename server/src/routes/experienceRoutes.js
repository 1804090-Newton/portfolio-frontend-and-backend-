const Router = require('koa-router');
const { handleCreateExperience, handleGetAllExperiences, handleGetExperienceById, handleDeleteExperience } = require('../controllers/experienceController');

const router = new Router();

router.post('/experience', handleCreateExperience);
router.get('/experiences', handleGetAllExperiences);
router.get('/experience/:userId/:experienceId', handleGetExperienceById);
router.delete('/experience/:userId/:experienceId', handleDeleteExperience);

module.exports = router.routes();
