const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/about',function (req,res){
	res.send('I\'m in About page')
})

app.get('/about/help',function (req,res){
	res.send('I\'m in Help page')
})

app.get('/:name',function (req,res) {
	// body...
	res.send('Hello '+req.params.name)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
