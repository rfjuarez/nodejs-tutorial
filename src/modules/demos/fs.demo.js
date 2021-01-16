const fs = require("fs");
//https://nodejs.org/en/knowledge/file-system/how-to-write-files-in-nodejs/
const path = "./modules/data/fs.demo.dat";
FSDemo = {
    
    writeLine: (line)=>{
        fs.writeFile(path,line,(err)=>{
            if (err) return console.log(err);
            console.log(`write: ${line}-->${"fs.demo.dat"}`);
        });
    },
    readLine: ()=>{
        fs.readFile(path, 'utf8', (err,data) =>{
            if (err) {
              return console.log(err);
            }
            console.log(data);
          });
    }
}

module.exports=FSDemo;

