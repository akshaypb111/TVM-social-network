const express = require('express')
const app = express()

app.use(express.static('public'));

var Datastore = require('nedb')
var db = new Datastore({filename:'store.db',autoload:true});

app.set('view engine', 'ejs');

app.get('/test',function (req,res) {
	
	db.find({},function (err,result) {
		console.log(result);
		res.render('home',{"result" : result});
	})
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})