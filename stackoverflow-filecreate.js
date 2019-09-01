var fs = require('fs'); 
  
// Use readFileSync() method 
  
// Store the result (return value) of this 
// method in a variable named readMe 
for(let i=0 ; i < 4 ; i++) {
    var readMe = JSON.stringify({"data" : i});
     
    fs.writeFileSync('writeMe' + i + '.json', readMe, "utf8");
}

   
// Store the content and read from 
// readMe.txt to a file WriteMe.txt 
