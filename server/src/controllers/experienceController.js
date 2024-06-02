const { createExperience, getAllExperiences, getExperienceById, deleteExperience , updateExperience } = require('../models/ExperienceModel');

async function handleCreateExperience(ctx) {
  try {
    const experience = ctx.request.body;
    await createExperience(experience);
    ctx.response.created('Experience created successfully');
  } catch (error) {
    ctx.response.internalError(error.message);
  }
}

async function handleGetAllExperiences(ctx) {
  try {
    const data = await getAllExperiences();
    ctx.response.ok('All experiences fetched successfully', data.Items);
  } catch (error) {
    ctx.response.internalError(error.message);
  }
}

async function handleGetExperienceById(ctx) {
  try {
    const { userId, experienceId } = ctx.params;
    console.log(`Received userId: ${userId}, experienceId: ${experienceId}`);
    const data = await getExperienceById(userId, experienceId);
    if (!data.Item) {
      ctx.response.notFound('Experience not found');
      return;
    }
    ctx.response.ok('Experience fetched successfully', data.Item);
  } catch (error) {
    ctx.response.internalError(error.message);
  }
}

async function handleDeleteExperience(ctx) {
  try {
    const { userId, experienceId } = ctx.params;
    await deleteExperience(userId, experienceId);
    ctx.response.ok('Experience deleted successfully');
  } catch (error) {
    ctx.response.internalError(error.message);
  }
}
async function handleUpdateExperience(ctx) {
  try {
    const { userId, experienceId } = ctx.params;
    const experience = ctx.request.body;
    await updateExperience(userId, experienceId, experience);
    ctx.response.ok('Experience updated successfully');
  } catch (error) {
    ctx.response.internalError(error.message);
  }
}

module.exports = {
  handleCreateExperience,
  handleGetAllExperiences,
  handleGetExperienceById,
  handleDeleteExperience,
  handleUpdateExperience
};
