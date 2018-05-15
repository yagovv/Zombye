const socket = (io) => {
    var nsp = io.of('/chats');
    nsp.on('connection', function(socket){
      console.log('someone connected');
    });
    nsp.emit('hi', 'everyone!'); 
}
module.exports = socket;