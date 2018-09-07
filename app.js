var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var locationRouter = require('./routes/location')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))




app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*')
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,content-type')
    // Pass to next layer of middleware
    next()
  })

  app.use('/location', locationRouter)

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Technical Challenge Started", host, port)

})