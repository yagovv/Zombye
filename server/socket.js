//EL Truco del almendruco
const Chat = require('./models/Chat');
const socket = (io) => {
    var sockets = {};

    io.on('connection', function (socket) {
        var id = socket.request._query["id"];
        sockets[id] = socket;
        socket.room = id;
        socket.join(id);
        console.log('CONNECTED SOCKET', id);


        socket.on('disconnect', () => {
            delete sockets[id];
            if (socket.room) {
                socket.leave(socket.room);
            }
        });

        socket.on('sendmessage', (msg) => {
            if (sockets[id]) {
                //guardar el mensjae en la base de datos
                console.log(msg);
                console.log(id);
                Chat.findByIdAndUpdate(id, {
                    $push: {
                        history: msg
                    }
                }).then(()=>{
                    console.log("saved");
                    socket.broadcast.to(socket.room).emit('newmessage', msg);
                })
                // sockets[id].emit('newmessage', msg);
                
            }
        });

        // socket.on('addtoroom', (meetupId) => {
        //     socket.room = meetupId;
        //     socket.join(meetupId);
        // });

        // socket.on('sendtoroom', (message) => {
        //     socket.broadcast.to(socket.room).emit('updateroom', message);
        // });
    });
    // var nsp = io.of('/chats');
    // nsp.on('connection', function (socket) {
    //     console.log('someone connected');
    // });
    // nsp.emit('hi', 'everyone!');
}
module.exports = socket;


/*
The C programming language (Prentice Hall)
Robert C Martin
the pragmatic programmer 
refactoring improving the design of existing code -- Martin Fowler
The Art Of Computer Programming - Donald E. Knuth -> youtube lectures
Numberphile -> youtube
Google developers -> youtube
Caltech -> youtube
Siraj Raval -> youtube
Android dialogs -> youtube
London JS User Group -> yutu
CMU Database Group -> yutu
CNCF -> yutuf

*/