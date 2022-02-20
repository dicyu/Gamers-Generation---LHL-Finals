// web
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

require("dotenv").config();
// app.use(bodyParser.json());
app.use(cors());

// database config
const db = require("./configs/db.config");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// routes
const indexRouter = require("./routes/index");
const gamersRegisterRouter = require("./routes/gamers");
const friendsRouter = require("./routes/friends");
const reportsRouter = require("./routes/reports");
const profileCardsRouter = require("./routes/profileCards");
const likesRouter = require("./routes/likes");

app.use("/friends", friendsRouter(db));
app.use("/reports", reportsRouter(db));
app.use("/register", gamersRegisterRouter(db));
app.use("/profileCards", profileCardsRouter(db));
app.use("/likes", likesRouter(db));
app.use("/", indexRouter);

module.exports = app;
