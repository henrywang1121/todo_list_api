var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var todoRoutes = require('./routes/todos');

app.get('/', function(req, res){
   res.send('Hell from the root route');
});

app.use('/api/todos', todoRoutes);


app.listen(port, function(){
   console.log("Server Running: " + process.env.PORT); 
});