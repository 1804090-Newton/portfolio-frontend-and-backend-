const Router = require('koa-router');
const { handleCreateProject, handleGetAllProjects, handleGetProjectById, handleDeleteProject,handleUpdateProject } = require('../controllers/projectController');

const router = new Router();

router.post('/project', handleCreateProject);
router.get('/projects', handleGetAllProjects);
router.get('/project/:userId/:projectId', handleGetProjectById);
router.delete('/project/:userId/:projectId', handleDeleteProject);
router.put('/project/:userId/:projectId', handleUpdateProject);

module.exports = router.routes();
