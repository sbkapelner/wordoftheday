const twilio = require('twilio');
const config = require('./config')

var client = new twilio(config.TWILIO_ACCOUNT_SID, config.TWILIO_AUTH_TOKEN);

client.messages.create({
    to: config.MY_NUMBER,
    from: config.MY_TWILIO_NUMBER,
    body: 'Hello World!'
});