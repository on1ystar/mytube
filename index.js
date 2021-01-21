const express = require("express");
const app = express();

PORT = 4000;

function handleListening() {
  console.log("Listening on: http://localhost:4000");
}
app.listen(PORT, handleListening);
