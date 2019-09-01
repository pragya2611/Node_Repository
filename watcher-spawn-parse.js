'use strict';

const fs = require('fs');
    const spawn = require('child_process').spawn;
    const filename = process.argv[2];
    if(!filename) {
        throw Error('Please provide a filename');
    }
    fs.watch(filename,function() {
        let ls = spawn('ls',['-lh',filename]);
        let output = '';
        ls.stdout.on('data',function(chunk) {
            output+= toString(chunk);
        });
        ls.on('close',function() {
            let parts = output.split(/\s+/);
            console.dir([parts[4],parts[8]]);
        });
        // ls.stdout.pipe(process.stdout);
        // console.log("Filename" + filename + "has been changed");
    });
    console.log("Watching for file changes");