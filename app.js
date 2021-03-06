const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.set('port',process.env.PORT||5000)

app.get('/about',function (req,res){
	res.send('I\'m in About page')
})

app.get('/about/help',function (req,res){
	res.send('I\'m in Help page')
})


app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!')
})
