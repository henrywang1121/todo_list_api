var express = require('express');
var router = express.Router();
var db = require('../models');



router.get('/:todoId', function(req, res){
   db.Todo.findById(req.params.todoId)
   .then(function(foundTodo){
      res.json(foundTodo);
   })
   .catch(function(err){
      res.send(err);
   })
});

router.put('/:todoId', function(req, res){
   db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new:  true})
   .then(function(todo){
      res.json(todo);
   })
   .catch(function(err){
      res.send(err);
   })
});

router.delete('/:todoId', function(req, res){
   db.Todo.remove({_id: req.params.todoId})
   .then(function(){
      res.json({message: 'Deleted'});
   })
   .catch(function(err){
      res.send(err);
   });
});


module.exports = router;