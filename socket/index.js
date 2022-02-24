const io = require("socket.io")(8000, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let users = [];

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  // when user connected
  console.log("a user connected.");

  //take user Id and socket id from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  // send and get messages
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    console.log(
      "this is firing in sendMessage",
      users,
      senderId,
      receiverId,
      text
    );
    const user = getUser(receiverId);
    console.log(user);

    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });

  // when user disconnected
  socket.on("disconnect", () => {
    console.log("a user disconnected.");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});
