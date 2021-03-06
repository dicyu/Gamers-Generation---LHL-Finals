// web
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();
const path = require("path");

// .env file variables
require("dotenv").config();

// Middleware
app.use(cors({ origin: true, credentials: true }));

// database config
const db = require("./configs/db.config");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// routes
const indexRouter = require("./routes/index");
const registerRouter = require("./routes/register");
const friendsRouter = require("./routes/friends");
const reportsRouter = require("./routes/reports");
const profileCardsRouter = require("./routes/profileCards");
const likesRouter = require("./routes/likes");
const loginRouter = require("./routes/login");
const editRouter = require("./routes/profile-edit");
const tokenRouter = require("./routes/current-user");
const conversationRouter = require("./routes/conversation");
const chatRouter = require("./routes/chat");
const matchesRouter = require("./routes/match");

app.use("/friends", friendsRouter(db));
app.use("/reports", reportsRouter(db));
app.use("/register", registerRouter(db));
app.use("/profileCards", profileCardsRouter(db));
app.use("/likes", likesRouter(db));
app.use("/login", loginRouter(db));
app.use("/edit", editRouter(db));
app.use("/current-user", tokenRouter(db));
app.use("/", indexRouter);
app.use("/chats", chatRouter(db));
app.use("/conversations", conversationRouter(db));
app.use("/matches", matchesRouter(db));

module.exports = app;
