// const http = require('http');
// http.get('http://smartbe.be/fr/', res => {
//     res.setEncoding('utf-8');
//     res.on('data', data => {
//         console.log('---------------------------------------');
//         console.log(data);
//     })
//     res.on('end',() => {
//         console.log('data fully downloaded');
//     })
// })

const http = require('http');
const values = [];
const sitesToVisit = ['http://www.voo.be','http://www.lesoir.be','http://www.pass.be']
let sitesLoaded=0;
const getStringFromUrlAndStock = (url) => {
    http.get( url, res => {
        res.setEncoding('utf-8');
        let body = '';
        res.on('data', data => {
            body += data;
        })
        res.on('end',() => {
            values.push(body);
            sitesLoaded ++;
            console.log(`data from ${url} fully downloaded`);
            if(sitesLoaded === sitesToVisit.length){
                console.log('All sites loaded')
            }
        })
    })
}

const init=()=>{
    sitesToVisit.map(site =>{
        getStringFromUrlAndStock(site)
    })
}
init();