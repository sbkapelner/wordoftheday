const fs = require('fs');
const got = require('got');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const url= 'https://spanish.kwiziq.com/learn/theme/721820';

module.exports = {scrape: function scrape(){
got(url).then(response => {
    const dom = new JSDOM(response.body);
    const length = (dom.window.document.querySelectorAll('.txt--lang-native').length);
    const i = Math.floor(Math.random() * length + 1);
    const native = dom.window.document.querySelectorAll('.txt--lang-native')[i].textContent;
    const foreign = dom.window.document.querySelectorAll('.txt--lang-foreign')[i].textContent;
    const text = native + ' => ' + foreign;
    fs.writeFile('word.txt', text, function (err) {
        if (err) return console.log(err);
    });
}).catch(err => {
  console.log(err);
})}}