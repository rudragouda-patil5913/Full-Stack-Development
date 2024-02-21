const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

app.use(bodyParser.json());

let todoList = [];

const findIndex = (arr, id) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id == id) return i;
  }
  return -1;
};

const deleteTodo = (arr, id) => {
  let newtodo = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== id) {
      newtodo.push(arr[i]);
    }
  }
  return newtodo;
};

app.get("/todolist", (req, res) => {
  res.json(todoList);
});

app.put("/todolist/:id", (req, res) => {
  const idx = findIndex(todoList, parseInt(req.params.id));
  if (idx === -1) {
    res.status(400).send("enter the proper id");
  } else {
    let newObj = {
      id: todoList[idx].id,
      title: req.body.title,
      desc: req.body.desc,
    };
    todoList[idx] = newObj;
    res.status(201).send();
  }
});

app.post("/todolist", (req, res) => {
  const objTodo = {
    id: Math.floor(Math.random() * 100),
    title: req.body.title,
    desc: req.body.desc,
  };
  todoList.push(objTodo);
  res.status(200).send();
});

app.delete("/todolist/:id", (req, res) => {
  const idx = findIndex(todoList, parseInt(req.params.id));
  todoList = deleteTodo(todoList, idx);
  res.send();
});

app.listen(3000, () => {
  console.log("Server running successfully");
});
