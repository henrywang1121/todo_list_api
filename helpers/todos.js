var db = require('../models');

exports.getTodos = function(req, res){
   db.Todo.find()
   .then(function(todos){
       res.json(todos);
   })
   .catch(function(err){
       res.send(err);
   })
   
}

exports.createTodos = function(req, res){
   db.Todo.create(req.body)
   .then(function(newTodo){
      res.json(newTodo);
   })
   .catch(function(err){
      res.send(err);
   })
}

module.exports = exports;