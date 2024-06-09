import { Socket } from "socket.io";
import {v4 as UUIDv4} from "uuid"

 const roomHandler = (socket:Socket)=>{

    const createRoom = ()=>{
       
        // This is the unique id for the room in which multiple connection will exchange the data 
        const roomId = UUIDv4();
        //we will make the socket connection and enter into the new room
        socket.join(roomId);
        
        //we will emit an event from the server side that socket connection has been added in a room
        socket.emit("room-created", { roomId });
        console.log("Room created with the id", roomId);
    } 

    const joinRoom = ({roomId}:{roomId:string})=>{
        console.log("new user room join",roomId);
    }

    //when we call above fun
    // we will call the above two function when the client emit and event  to create room and join room

    socket.on("create-room",createRoom);
    socket.on("join-room",joinRoom); 

}
export default roomHandler;
