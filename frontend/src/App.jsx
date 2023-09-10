import { useState,useEffect } from 'react'
import './App.css'
import {io} from 'socket.io-client'
import { UlMensajes,LiMensaje } from './ui-components'

const socket = io('http://localhost:3000')

function App() {

  const [isConnected,setIsConnnected] = useState(false)
  
  const [nuevoMensaje,setNuevoMensaje] = useState('')

  const [mensajes,setMensajes] = useState([])
  
  useEffect(() => {
    socket.on('connect', ()=> setIsConnnected(true))
    socket.on('chat_mensage', (data)=> {
      
    })


    return ()=> {
      socket.off('connect')
      socket.off('chat_mensage')
    }
    
  },[])

  const enviarMensaje = ()=>{
    socket.emit('chat_mensage', ()=> {
      usuario: socket.id 
      mensaje: nuevoMensaje
    })
  }

  return (
    <div class="App">
      <h1>{isConnected ? 'conectado' : 'Desconectado'}</h1>
      <UlMensajes>
        <LiMensaje>

        </LiMensaje>
      </UlMensajes>

      <input type="text" 
        onChange={e => setNuevoMensaje(e.target.value)} 
      />
      <button onClick={enviarMensaje}></button>
    </div>
  )
}

export default App