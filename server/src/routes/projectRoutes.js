const Router = require('koa-router');
const { handleCreateProject, handleGetAllProjects, handleGetProjectById, handleDeleteProject } = require('../controllers/projectController');

const router = new Router();

router.post('/project', handleCreateProject);
router.get('/projects', handleGetAllProjects);
router.get('/project/:projectId', handleGetProjectById);
router.delete('/project/:projectId', handleDeleteProject);

module.exports = router.routes();