var config = require('./config')

// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate').v2;
var config = require('./config')

// Creates a client
const translate = new Translate({
    api_key: config.API_KEY,
    projectID: config.project_id
});

console.log(config.API_KEY)