// FILE FOR TESTING CHOKIDAR
// TESTING CHOKIDAR

// REQUIREMENTS
const chokidar = require('chokidar');
const fs = require('fs');

// this might be able to read only the new stuff and remove the old
// remember that i need a way to make sure files dont get too big after a long time
// because file size might be incredibly big after one day
let fileSize = 0;

const log = console.log.bind(console);
const watcher = chokidar.watch('prsn_logfile_240208', {
    persistent: true
});

watcher
    .on('change', (path) => {
        //log(`Chokidar: File ${path} has been changed`);

        fs.stat(path, (err, stats) => {
            
            if(err) log(`Error reading file: ${err}`);
            else {
                const newSize = stats.size;
                const sizeDiff = newSize - fileSize;

                if(sizeDiff > 0) {
                    const buffer = Buffer.alloc(sizeDiff);

                    const fd = fs.openSync(path, 'r');
                    fs.readSync(fd, buffer, 0, sizeDiff, fileSize);
                    fs.closeSync(fd);

                    log(`New content: ${buffer.toString()}`);
                }

                fileSize = newSize;
            }
        });
    })
    .on('ready', () => log('Chokidar: Ready for change.'));