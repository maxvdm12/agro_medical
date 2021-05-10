var express = require("express");
var bodyParser = require("body-parser");
let routes = require('./routes/router');
let app = express();
let cors = require('cors');


//Mysql Connect

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb'
});
connection.connect(function(error) { if(error) console.log(error);});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false

}));


app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));


//app.use('/removetask/:idtask', routes);
//app.use('/addtask', routes);


app.use(cors());




app.use('/', routes);


app.listen(4000, '0.0.0.0', function() {
    console.log("server is running on port 3000");
});


