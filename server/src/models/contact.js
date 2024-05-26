const ddbDocClient = require('../config/aws');
const { PutCommand } = require('@aws-sdk/lib-dynamodb');

const tableName = 'Contact';

async function createContact(contact) {
  const params = {
    TableName: tableName,
    Item: contact,
  };
  return ddbDocClient.send(new PutCommand(params))
    .then(data => {
      return data;
    })
    .catch(error => {
      throw error;
    });
}

module.exports = {
  createContact,
};
