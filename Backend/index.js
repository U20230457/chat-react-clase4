const http = require('http')
const server = http.createServer()

const io = require('socket.io')(server,{
    cors: {
        origin : '*'
    }
})

io.on('connection',(socket) => {
    console.log('conectado al servidor')
    console.log(socket)
    socket.on('chat_mensage',(data) =>{
        console.log(data)
    })
})

server.listen(3000)