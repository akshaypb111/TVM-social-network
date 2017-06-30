const express = require('express')
const app = express()

app.use(express.static('public'));

app.get('/check',function(req,res){
	console.log(__dirname);
	res.sendFile(__dirname+'/public/check.html');
})

app.get('/nsubmit',function (req,res) {
	

	if (req.query.num%2) {
		res.send("Odd")
	}
	else{
		res.send("Even")
	}
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})