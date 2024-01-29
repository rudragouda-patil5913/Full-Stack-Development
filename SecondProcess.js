const logValue = (jsonBody) => {
  console.log(jsonBody);
};

const CallBackFn = (res) => {
  res.json().then(logValue);
};

const sendObj = {
  method: "GET",
};

fetch("http://localhost:3000/?count=5", sendObj).then(CallBackFn);
