const curl = require("curl");
const jsdom = require("jsdom");

function parseData(html){
    const {JSDOM} = jsdom;
    const dom = new JSDOM(html);
    const $ = (require('jquery'))(dom.window);
    console.log(html);
    //let's start extracting the data
}

const url = "https://quizlet.com/gb/460615265/spanish-b2-examen-1-flash-cards/";
curl.get(url, null, (err,resp,body)=>{parseData(body);});
