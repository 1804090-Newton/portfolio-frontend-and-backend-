const ddbDocClient = require('../config/aws');
const { PutCommand, ScanCommand, GetCommand, DeleteCommand } = require('@aws-sdk/lib-dynamodb');
const { marshall, unmarshall } = require('@aws-sdk/util-dynamodb');

const tableName = 'Experience';

async function createExperience(experience) {
  const params = {
    TableName: tableName,
    Item: experience,
  };
  return ddbDocClient.send(new PutCommand(params))
    .then(data => {
      return data;
    })
    .catch(error => {
      throw error;
    });
}

async function getAllExperiences() {
  const params = {
    TableName: tableName,
  };
  return ddbDocClient.send(new ScanCommand(params))
    .then(data => {
      return data;
    })
    .catch(error => {
      throw error;
    });
}

async function getExperienceById(userId, experienceId) {
  const params = {
    TableName: tableName,
    Key: marshall({
      userId: userId,  
      experienceId: experienceId,  
    }),
  };

  console.log(`Fetching from DynamoDB with params: ${JSON.stringify(params)}`);

  return ddbDocClient.send(new GetCommand(params))
    .then(data => {
      if (data.Item) {
        return { Item: unmarshall(data.Item) };
      }
      return data;
    })
    .catch(error => {
      console.error('Error fetching from DynamoDB', error);
      throw error;
    });
}

async function deleteExperience(userId, experienceId) {
  const params = {
    TableName: tableName,
    Key: marshall({
      userId: String(userId),  
      experienceId: String(experienceId),  
    }),
  };

  console.log(`Deleting from DynamoDB with params: ${JSON.stringify(params)}`);

  return ddbDocClient.send(new DeleteCommand(params))
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error('Error deleting from DynamoDB', error);
      throw error;
    });
}

module.exports = {
  createExperience,
  getAllExperiences,
  getExperienceById,
  deleteExperience,
};
