import express from "express";
import { Server } from "socket.io";
import cors from "cors";

import http from "http"

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

    io.on("disconnect",(socket)=>{
        console.log("The user is disconnect")
    })
})


server.listen(5000,()=>{
    console.log("The server is start");
})