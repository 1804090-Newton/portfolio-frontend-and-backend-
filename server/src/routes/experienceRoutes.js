const Router = require('koa-router');
const { handleCreateExperience, handleGetAllExperiences, handleGetExperienceById, handleDeleteExperience, handleUpdateExperience} = require('../controllers/experienceController');

const router = new Router();

router.post('/experience', handleCreateExperience);
router.get('/experiences', handleGetAllExperiences);
router.get('/experience/:userId/:experienceId', handleGetExperienceById);
router.delete('/experience/:userId/:experienceId', handleDeleteExperience);
router.put('/experience/:userId/:experienceId', handleUpdateExperience);

module.exports = router.routes();
