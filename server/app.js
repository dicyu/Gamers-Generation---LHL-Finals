// web
const express = require("express");
const cookieSession = require("cookie-session");
const bcrypt = require("bcrypt");
const logger = require("morgan");
const cors = require("cors");
const app = express();
const path = require("path");
const logger = require("morgan");

// .env file variables
require("dotenv").config();
const KEY1 = process.env.KEY1;
const KEY2 = process.env.KEY2;

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(
  cookieSession({
    name: "session",
    keys: [KEY1, KEY2],
  })
);

// database config
const db = require("./configs/db.config");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// routes
const indexRouter = require("./routes/index");
const gamersRegisterRouter = require("./routes/register");
const friendsRouter = require("./routes/friends");
const reportsRouter = require("./routes/reports");
const profileCardsRouter = require("./routes/profileCards");
const likesRouter = require("./routes/likes");
const loginRouter = require("./routes/login");

app.use("/friends", friendsRouter(db));
app.use("/reports", reportsRouter(db));
app.use("/register", gamersRegisterRouter(db));
app.use("/profileCards", profileCardsRouter(db));
app.use("/likes", likesRouter(db));
app.use("/login", loginRouter(db));
app.use("/", indexRouter);

module.exports = app;
