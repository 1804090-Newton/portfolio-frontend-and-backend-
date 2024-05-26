
const { createContact } = require('../models/contact');

async function handleCreateContact(ctx) {
  try {
    const contact = ctx.request.body;
    await createContact(contact);
    ctx.response.created('Contact created successfully');
  } catch (error) {
    ctx.response.internalError(error.message);
  }
}

module.exports = {
  handleCreateContact,
};
