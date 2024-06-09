import express from "express";
import { Server } from "socket.io";
import cors from "cors";

import http from "http"
import roomHandler from "./handlers/RoomHandler";

const app = express();

app.use(cors());

const server = http.createServer(app);


const io = new Server(server,{


    cors:{
        origin:"*",
        methods:["GET","POST"]
    }
});

io.on("connection",(socket)=>{
    console.log("New User is connected");
    roomHandler(socket);
    
    socket.on("disconnect",()=>{
        console.log("The user is disconnect");
    });
})


server.listen(5000,()=>{
    console.log("The server is start at the server 5000");
})