
const { createProject, getAllProjects, getProjectById, deleteProject } = require('../models/ProjectModel');

async function handleCreateProject(ctx) {
  const project = ctx.request.body;
  try {
    await createProject(project);
    ctx.response.created('Project created successfully');
  } catch (error) {
    ctx.response.internalError(error.message);
  }
}

async function handleGetAllProjects(ctx) {
  try {
    const data = await getAllProjects();
    ctx.response.ok('Projects retrieved successfully', data.Items);
  } catch (error) {
    ctx.response.internalError(error.message);
  }
}

async function handleGetProjectById(ctx) {
  const { userId,projectId } = ctx.params;
 console.log(ctx.params);
  try {
    const data = await getProjectById(userId,projectId);
    if (!data.Item) {
      ctx.response.notFound('Project not found');
    } else {
      ctx.response.ok('Project retrieved successfully', data.Item);
    }
  } catch (error) {
    ctx.response.internalError(error.message);
  }
}

async function handleDeleteProject(ctx) {
  const { userId,projectId } = ctx.params;
  try {
    await deleteProject(userId,projectId);
    ctx.response.ok('Project deleted successfully');
  } catch (error) {
    ctx.response.internalError(error.message);
  }
}

module.exports = {
  handleCreateProject,
  handleGetAllProjects,
  handleGetProjectById,
  handleDeleteProject,
};
