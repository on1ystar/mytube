import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;

function handleListening() {
  console.log("Listening on: http://localhost:4000");
}

function handleHome(req, res) {
  res.send("Welcome to my home");
}

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmetI());
app.use(morgan("dev"));

app.get("/", handleHome);

app.listen(PORT, handleListening);
