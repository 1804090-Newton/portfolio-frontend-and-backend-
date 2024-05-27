const { getAbout } = require('../models/aboutModel');

async function handleGetAbout(ctx) {
    try {
      const data = await getAbout();
      ctx.response.ok('All get about fetched successfully', data.Items);
    } catch (error) {
      ctx.response.internalError(error.message);
    }
  }

  module.exports = { handleGetAbout };