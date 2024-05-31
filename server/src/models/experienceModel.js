const ddbDocClient = require('../config/aws');
const { PutItemCommand, ScanCommand, GetItemCommand, DeleteItemCommand } = require('@aws-sdk/client-dynamodb');
const { marshall, unmarshall } = require('@aws-sdk/util-dynamodb');

const tableName = 'Experience';

async function createExperience(experience) {
  const params = {
    TableName: tableName,
    Item:marshall(experience),
  };
  return ddbDocClient.send(new PutItemCommand(params))
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
        return { Items: data.Items.map(item => unmarshall(item)) };
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


  return ddbDocClient.send(new GetItemCommand(params))
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

 

  return ddbDocClient.send(new DeleteItemCommand(params))
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
