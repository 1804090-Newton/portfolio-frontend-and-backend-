const ddbDocClient = require('../config/aws');
const { PutCommand, ScanCommand, GetCommand, DeleteCommand, UpdateCommand } = require('@aws-sdk/lib-dynamodb');


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

async function getProjectById(userId, projectId) {
  const params = {
    TableName: tableName,
    Key: {
      userId,
      projectId,
    },
  };
     
  return ddbDocClient.send(new GetCommand(params))
    .then(data => {
       console.log(data.Item);
        return data;
      
    })
    .catch(error => {
      throw error;
    });
}

async function deleteProject(userId,projectId) {

  const params = {
    TableName: tableName,
    Key:{
      userId,
      projectId,
    },
  };
  return ddbDocClient.send(new DeleteCommand(params))
    .then(data => {
      return data;
    })
    .catch(error => {
      throw error;
    });
}
async function updateProject(userId, projectId, project) {
  const params = {
    TableName: tableName,
    Key: {
      userId,
      projectId,
    },
    
    UpdateExpression: `SET 
      #description = :description, 
      #startDate = :startDate,  
      #projectStatus = :status,
      #githubLink = :githubLink,
      #demoLink = :demoLink,
      #projectName = :projectName`,
    ExpressionAttributeValues: {
      ':description': project.description,
      ':startDate': project.startDate,
      ':status': project.status,
      ':githubLink': project.githubLink,
      ':demoLink': project.demoLink,
      ':projectName': project.projectName,
    },
    ExpressionAttributeNames: {
      '#description': 'description',
      '#startDate': 'startDate',
      '#projectStatus': 'status', 
      '#githubLink': 'githubLink',
      '#demoLink': 'demoLink',
      '#projectName': 'projectName',
    },
    ReturnValues: 'ALL_NEW',
  };

  console.log('Updating project with params:', params);
  
  return ddbDocClient.send(new UpdateCommand(params))
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
  updateProject,
};
