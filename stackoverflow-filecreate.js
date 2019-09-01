var fs = require('fs'); 
  

for(let i=0 ; i < 4 ; i++) {
    //create json data and stringify to write 
    var readMe = JSON.stringify({"data" : i});
     //write file sync data
    fs.writeFileSync('writeMe' + i + '.json', readMe, "utf8");
}


