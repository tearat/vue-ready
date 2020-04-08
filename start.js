const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')
const history = require('connect-history-api-fallback')
const config = require('./config')

console.log(history)

router.get("/", function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'))
});

app.use(history())
app.use(express.static(__dirname + "/"))

app.listen(config.frontend.port, function(){
    console.log("Frontend server started on: " + config.frontend.port)
});
