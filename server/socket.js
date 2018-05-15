const socket = (io) => {
  io.on('connection', function(socket){
      console.log('a user connected');
      socket.emit("chatmessage", {message:"Hola k ase"});
      socket.on("chatmessage", (msg) =>{
          console.log(msg)
          socket.broadcast.emit('chatmessage',msg);
      })
  });     
}
module.exports = socket;