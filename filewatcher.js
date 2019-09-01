const fs = require('fs');
fs.watch('target.txt',function(){
    console.log('File changed');
});
console.log('Watching for changes in target.txt');