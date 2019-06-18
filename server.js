const express = require('express');
const app = express();
const layouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(layouts);
app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('home');
});
app.get('/skills', function(req, res){
	var skills = [
		"JavaScript",
		"HTML 5",
		"CSS 3",
		"Node JS",
		"Express JS",
		"Crooning"
	];
    res.render('skills', {skills:skills});
});
app.get('/contact', function(req, res){
	var contact = {
		name: "Steve Peters",
		email: "steve@steve.com",
		phone: "206-555-1212",
		fax: "Who uses faxes anymore?",
		site: "http://steve.io"
	};
    res.render('contact', {contact:contact});
});

app.listen(3000, function(){
    console.log("I am listening on port 3000");
});
