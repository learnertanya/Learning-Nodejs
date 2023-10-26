const fs= require("fs");
fs.writeFileSync("./test.txt","Hey there")
fs.writeFile("./test2.txt","Asynchronous",(err)=>{})
 