const express = require('express')
const app = express()

app.use(express.static('public'));

var Datastore = require('nedb')
var db = new Datastore({filename:'store.db',autoload:true});

app.set('view engine', 'ejs');

app.get('/',function(req,res){
	console.log(__dirname);
	res.sendFile(__dirname+'/public/index.html');
})

app.get('/Login',function(req,res){
	console.log(__dirname);
	res.sendFile(__dirname+'/public/login.html');
})

app.get('/Signup',function(req,res){
	console.log(__dirname);
	res.sendFile(__dirname+'/public/signup.html');
})

app.get('/loginSubmit',function (req,res) {
	var userName = req.query.username;
	var userPassword = req.query.password;

	var person = {
		"email" : userName,
		"password" : userPassword
	}

	db.find({},function (err,result) {
		
		console.log(result);

		if (result.length > 0) {
			res.send("Login Successful")
		}
		else{
			res.send("Login Failed")
		}
	})

})


app.get('/SignupSubmit',function (req,res) {
	var userFirstName = req.query.firstName;
	var userLastName = req.query.lastName;
	var userName = req.query.username;
	var userPassword = req.query.password;

	var person = {
		"firstname" : userFirstName,
		"lastname" : userLastName,
		"email" : userName,
		"password" : userPassword
	}

	db.insert(person,function(err,result){
		console.log(result);
		res.send('Success!! Data Inserted');
	})
})

app.get('/test',function (req,res) {
	

	res.render('index',{"name" : "Tom"});
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})