const socket = (io) => {
  io.on('connection', function(socket){
      console.log('a user connected');
      socket.emit("chatmessage", {message:"Hola k ase"});
      socket.on("chatmessage", (msg) =>{
          console.log(msg)
          socket.broadcast.emit('chatmessage',msg);
      })
  });     
  var nsp = io.of('/chats');
    nsp.on('connection', function(socket){
      console.log('someone connected');
    });
    nsp.emit('hi', 'everyone!'); 
}
module.exports = socket;