const express = require('express');
const app = express();
const cors = require('cors');
const Todo = require('./Module/todoSchema');
require('dotenv').config();
const port = 5000;
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));
//=======================================================================
//conection with database
const mongoose = require('mongoose');

const url = "mongodb+srv://jeem:jeem@cluster0.wy1fx.mongodb.net/todoapp?retryWrites=true&w=majority";
mongoose.connect(url)
    .then(result => {
        app.listen(process.env.PORT || 5000, function () {
            console.log('hi server is on')
        });
    })
    .catch(err => {
        console.log(err);
    });
//=======================================================================
app.post("/add", (req, res) => {
    const data={
        text: req.body.text,
    }
    const todo = new Todo(data);
    todo
        .save()
        .then(result => {
            res.redirect("/");
        })
        .catch(err => {
            console.log(err);
        });
})

app.delete('/delete/:id', async (req, red) => {
    const id = req.params.id;
    try {
      await Todo.findByIdAndRemove(id).exec();
    } catch (err) {
      console.log(err)
    }
  })
