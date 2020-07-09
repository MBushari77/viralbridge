const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();


// view engine
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
// connecting to static folder
app.use(express.static('static'));
// connection the body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Home || index route
app.get('/', (req, res) => {
	res.render('index')
});


const port = 4000;
let host = '192.168.43.2';
host = '127.0.0.1';

app.listen(port, host, () => {
	console.log(`server is running successfuly.\nhost: ${host}.\nport: ${port}`);
});