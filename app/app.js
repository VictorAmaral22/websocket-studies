const socket = io('ws://localhost:3001')

socket.on('chat message', text => {
    const li = document.createElement('li')
    li.textContent = text
    document.querySelector('ul').appendChild(li)
})

document.querySelector('button').onclick = () => {
    const input = document.querySelector('input')
    const text = input.value
    socket.emit('chat message', text)
    input.value = ''
}