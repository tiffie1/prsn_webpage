const socket = io.connect();

socket.on('connect', () => {
    console.log('Connected to server');
});

socket.on('fileChanged', (data) => {
    console.log('Received fileChanged event:', data);
    document.getElementById('testing').innerHTML = "File " + data.path + " has changed";
});