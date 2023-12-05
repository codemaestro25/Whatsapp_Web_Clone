import { Server } from "socket.io";

const io = new Server(9000, {
    cors: "http://localhost:3000"
});

let users = [];

const addUsers = (userData, socketId)=>{
    !users.some(user=> user.sub==userData.sub) && users.push({...userData, socketId});
}
const getUser = (receiverId) => {
    return users.find(user => user.sub === receiverId);
}

io.on("connection", (socket)=>{
    console.log("User Connected");

    socket.on("addUsers", userData=>{
        addUsers(userData, socket.id);
        io.emit("getUsers", users);
    })

    socket.on("sendMessage", (data)=>{
        const user  = getUser(data.receiverId);
        io.to(user.socketId).emit("getMessage", data);
    })
});



