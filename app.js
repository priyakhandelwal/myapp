var express = require('express'),
	app = express(),
	fs = require('fs'),
	parser = require('xml2json'),
	cookieParser = require('cookie-parser'),
	expressSession = require('express-session'),
	mail = require('./mail.js');

app.use(cookieParser());
app.use(expressSession({secret: 'awesome'}));
app.use(express.static('public'));


app.get('/', function (req, res) {
	req.session.visited = 'helloworld';
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
  console.log('Example app listening on port host = ' + host + 'port = ' + port);
});

app.get('/getJSON', function(req, res) {
	fs.readFile('sample.xml', function(err, data) {
		if (err) {
			res.send(err);
		}
		var json = parser.toJson(data);
		if (req.session.visited) {
			res.write('Hello world already visited');
			res.write(json);
			res.send();
		}
	});
});

app.get('/sendmail', function(req, res) {
	console.log('Reached here');
	debugger;
	mail.sendemail(req, res);	
});
