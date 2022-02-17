// web
const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const PORT = 8001;

require("dotenv").config();

// database config
const db = require("./configs/db.config");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// routes
const indexRouter = require("./routes/index");
const gamersRouter = require("./routes/gamers");
const friendsRouter = require("./routes/friends");
const reportsRouter = require("./routes/reports");

app.use("/friends", friendsRouter(db));
app.use("/reports", reportsRouter(db));
app.use("/gamers", gamersRouter(db));
app.use("/", indexRouter);

module.exports = app;
