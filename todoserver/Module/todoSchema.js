const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const todo = new Schema({
    text : String,
  });
  const Todo= mongoose.model("Todo", todo);
  module.exports = Todo;