const express = require("express");
const app = express();
const port = 3000;

const calculateSum = (count) => {
  let sum = 0;
  for (let i = 0; i < count; i++) {
    sum += i;
  }
  return sum;
};

// app.post("/", (req, res) => {
//   const answer = calculateSum(100);
//   res.send(`The count is ${answer}`);
// });

// Client to server communication
// 1. Query params
// 2. Headers
// 3. Body

// Query Params

// app.get("/", (req, res) => {
//   const count = req.query.count;
//   const answer = calculateSum(count);
//   res.send(`The count is ${answer} brother`);
// });

// headers( use postman in that add key-value in headers section )
app.get("/", (req, res) => {
  const count = req.headers.count;
  const answer = calculateSum(count);
  res.send(`The count is ${answer} brother`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
