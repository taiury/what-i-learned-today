const express = require("express");

const app = express();

const routes = require("./app/routes");

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello world");
});

app.use(routes);

app.listen(3002);
