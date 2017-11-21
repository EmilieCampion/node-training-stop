// const http = require('http');
// const fs = require ('fs')

// http.createServer((req,res)=> {
//     // console.log('On a reçu une info')
//     // res.end('Hello World');
//     console.log(req.url)
//     fs.readFile(`${process.cwd()}/public/books.json`,(err,json)=>{
//         if(err){
//             res.writeHead(404,{'Content-Type': 'text/html'})
//             res.end('The server has a problem please try later')
//         } 
//         console.log('ok')

//         fs.readFile(`${process.cwd()}/public/index.html`,(err,data)=>{
//             if(err){
//                 res.writeHead(404,{'Content-Type': 'text/html'})
//                 res.end('Page not found')
//             }
//             res.writeHead(200,{'Content-Type': 'text/html'})
//             res.end(generateHtml(data,json));
//         })
//     })
// }).listen(8000)

// function generateHtml(tpl,json){
//     return tpl.toString('utf8')
//     .replace('%books%',JSON.parse(json).map(item=>item.name).join('</li><li>'));
// }

// ----- Routes -----
const http = require('http');
const routes = [
    { url: '/', controller: 'home' },
    { url: '/about', controller: 'about' },
]
function router(req, res) {
    let route = routes.findIndex((item) => item.url === req.url)
    console.log(route)
    if (route !== -1) {
        require('./routes/' + routes[route].controller)(req, res)
    }
    else {
        require('./routes/error')(req, res)
    }
}
http.createServer(router).listen(8000)