var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));


var todoRoutes = require('./routes/todos');
app.use('/api/todos', todoRoutes);


app.get('/', function(req, res){
   res.sendFile('index.html');
});

app.listen(port, function(){
   console.log("Server Running: " + process.env.PORT); 
});