var hbs = require('hbs');

var express = require('express');
var app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.bodyParser());
app.use(app.router);

app.get('/', function(req, res) {
	res.render('index', {
		bodyContent: {
			content: 'hello'
		}
	});
});

app.listen(2000);
console.log('Started server on port 2000');