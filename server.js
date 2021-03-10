var express = require("express");
let routes = require('./router');
let app = express();


app.use(express.static('public'));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));


app.use('/', routes);
//app.use('/removetask/:idtask', routes);
//app.use('/addtask', routes);

//Mysql Connect

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb'
});
connection.connect(function(error) { if(error) console.log(error);});







app.listen(3000, function() {
    console.log("server is running on port 3000");
});

