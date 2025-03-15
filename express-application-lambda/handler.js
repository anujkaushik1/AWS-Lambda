const serverless = require("serverless-http");
const express = require("express");
const app = express();

const router = express.Router()

router.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

router.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use('/kaushik', router)

app.listen(3000);

exports.handler = serverless(app);
