// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const request = require('axios')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const bodyParser = require('body-parser')

const express = require('express')




app.prepare().then(() => {


    const server = express()
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({extended: false}));
    let port = 3000
    let rrequest = request.create({
        baseURL: "http://localhost:5001"
      });

        server.get('/api/*', (req, res) => {
            const parsedUrl = parse(req.url, true);
            const { pathname, query } = parsedUrl;
            rrequest.get(pathname,{params:req.query}).then((resulst)=>{
                //console.log('result server ', resulst.data)
                return res.status(200).send(resulst.data)
            }) 
        })
        server.post('/api/*', (req, res) => {
            const parsedUrl = parse(req.url, true);
            const { pathname, query } = parsedUrl;
            console.log('req.params',req.body)
            rrequest.post(pathname,{...req.body}).then((resulst)=>{
                return res.status(200).send(resulst.data)
            }) 
        })

    
        server.get('*', (req, res) => {
          return handle(req, res)
        })
    
        server.listen(port, (err) => {
          if (err) throw err
          console.log(`> Ready on http://localhost:${port}`)
        })
  
})