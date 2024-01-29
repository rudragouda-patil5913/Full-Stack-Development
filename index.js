const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const calculateSum = (count) => {
  let sum = 0;
  for (let i = 0; i < count; i++) {
    sum += i;
  }
  return sum;
};
// calculateMul
const calculateMul = (count) => {
  let mul = 1;
  for (let i = 1; i < count; i++) {
    mul *= i;
  }
  return mul;
};

// app.post("/", (req, res) => {
//   const answer = calculateSum(100);
//   res.send(`The count is ${answer}`);
// });

// Client to server communication
// 1. Query params
// 2. Headers
// 3. Body(to get benefits of body use external library body-parser)

// Query Params

// app.get("/", (req, res) => {
//   const count = req.query.count;
//   const answer = calculateSum(count);
//   res.send(`The count is ${answer} brother`);
// });

// headers( use postman in that add key-value in headers section )

// function middleware(req, res, next) {
//   console.log("Middle ware executed");
//   next();
// }

app.use(bodyParser.json());
// app.use(middleware);

// app.get("/", (req, res) => {
// const count = req.query.count;
// const count = req.headers.count;
// const answer = calculateSum(count);
// res.send(`The count is ${answer} brother using get method`);
// console.log("post");
//   console.log(req.body);
//   res.send(req.body);
// });

// app.post("/", (req, res) => {
//   // const count = req.query.count;
//   // const count = req.headers.count;
//   const count = req.body.count;
//   const answer = calculateSum(count);
//   const output = {
//     sum: answer,
//   };
//   res.send(output);
//   // res.send(req.body);
// });

// What servers can send back
// Headers,statusCode, body

// Body --->   HTML,JSON,Simple text

// JSON
// app.post("/",(req,res)=>{
//   const count = req.body.count;
//   const sum = calculateSum(count);
//   const mul = calculateMul(count);
//   const outputObj={
//     sum: sum,
//     mul: mul
//   }
//   res.send(outputObj)
// })

// HTML
// app.post("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });


app.get("/", (req,res)=>{
  const count = req.query.count;
  const ans = calculateSum(count);
  const Obj ={
    sum: ans
  }
  res.send(Obj);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
