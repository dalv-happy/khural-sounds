const { Server } = require("socket.io");
const io = new Server(3000, {
  cors: { origin: "*" }, // простое CORS для тестов
});

io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("play_sound", (sound) => {
    io.emit("play_sound", sound); // ретрансляция всем
  });
});
