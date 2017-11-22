const http = require('http');
const fs = require ('fs')

//---- avoir la page-----

http.createServer((req,res)=> {
    // console.log('On a reçu une info')
    // res.end('Hello World');
    console.log(req.url)
    fs.readFile(`${process.cwd()}/public/books.json`,(err,json)=>{
        if(err){
            res.writeHead(404,{'Content-Type': 'text/html'})
            res.end('The server has a problem please try later')
        } 
        console.log('ok')

        fs.readFile(`${process.cwd()}/public/home.html`,(err,data)=>{
            if(err){
                res.writeHead(404,{'Content-Type': 'text/html'})
                res.end('Page not found')
            }
            res.writeHead(200,{'Content-Type': 'text/html'})
            res.end(generateHtml(data,json));
        })
    })
}).listen(8000)

function generateHtml(tpl,json){
    return tpl.toString('utf8')
    .replace('%books%',JSON.parse(json).map(item=>item.name + " de <em>" + item.author + "</em>").join('</li><li>'));
}

//---- promesse-----

const filePromise = require('./readFilePromise');

filePromise.readFile('./public/books.json')
.then((data)=>{
    console.log(data.toString())})
.catch((err)=>{
    console.log(err)
})


