import io from 'socket.io-client'

const socket = io('http://192.168.1.40:5500')
export default socket;