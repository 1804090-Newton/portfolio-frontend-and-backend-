

const ddbDocClient = require('../config/aws');
const {  ScanCommand } = require('@aws-sdk/lib-dynamodb');


const tableName = 'AboutMe';


async function getAbout() {
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

  module.exports = {
      getAbout
  };
