const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const {Server} = require("socket.io");

const server = http.createServer(app);

const room = "chatroom";

var chatters = [];

app.use(cors());

const io = new Server(server, {
    cors: {
        origin: "*",
        method: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room", (data) =>{
        socket.nickname = data;
        chatters.push(data);
        socket.join(room);
        io.to(room).emit("update_users", chatters);
        console.log(chatters);
    })
    socket.on("send_message", (data) => {
        console.log(data);
        socket.to(data.room).emit("receive_message", data)
    })
    socket.on("disconnect", () => {
        const dcUser = chatters.indexOf(socket.nickname);
        if(dcUser > -1){
            chatters.splice(dcUser, 1);
        }
        io.to(room).emit("update_users", chatters);
        console.log("disconected", socket.id + " ", socket.nickname);
    });
});





server.listen(3001, () =>{
    console.log("Server running");
})