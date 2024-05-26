const ddbDocClient = require('../config/aws');
const { PutCommand, ScanCommand, GetCommand, DeleteCommand } = require('@aws-sdk/lib-dynamodb');
const { marshall } = require('@aws-sdk/util-dynamodb');

const tableName = 'Project';

async function createProject(project) {
  const params = {
    TableName: tableName,
    Item: project,
  };
  return ddbDocClient.send(new PutCommand(params))
    .then(data => {
      return data;
    })
    .catch(error => {
      throw error;
    });
}

async function getAllProjects() {
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

async function getProjectById(projectId) {
  const params = {
    TableName: tableName,
    Key: marshall({
      projectId,
    }),
  };
  return ddbDocClient.send(new GetCommand(params))
    .then(data => {
      return data;
    })
    .catch(error => {
      throw error;
    });
}

async function deleteProject(projectId) {
  const params = {
    TableName: tableName,
    Key: marshall({
      projectId,
    }),
  };
  return ddbDocClient.send(new DeleteCommand(params))
    .then(data => {
      return data;
    })
    .catch(error => {
      throw error;
    });
}

module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  deleteProject,
};
