const socket = io.connect('http://localhost:3000');

socket.on('connect', () => {
    console.log('Connected to server');
});

socket.on('fileChanged', (data) => {
    console.log('Received fileChanged event: ', data.path);
    document.getElementById('testing').innerHTML = "File " + data.path + " has changed";
});