// mac-client.js
const { io } = require("socket.io-client");
const { exec } = require("child_process");

const socket = io("http://127.0.0.1:3000");

socket.on("connect", () => {
  console.log("Connected to server");
});

socket.on("play_sound", (sound) => {
  console.log("play sound1", sound);
  exec(`afplay mp3/${sound}`);
});
