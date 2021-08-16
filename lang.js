const twilio = require('twilio');
const config = require('./config');
const scrape = require('./scrape.js')
const fs = require('fs');
const got = require('got');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

var client = new twilio(config.TWILIO_ACCOUNT_SID, config.TWILIO_AUTH_TOKEN)

async function asyncFunction() {
    scrape.scrape();
    var message = fs.readFileSync('word.txt', 'utf8');

    await client.messages.create({
        to: config.MY_NUMBER,
        from: config.MY_TWILIO_NUMBER,
        body: message
    });

};

setInterval(function() {asyncFunction()}, 8.64e+10);