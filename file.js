const fs= require("fs");
const os =require("os");
fs.writeFileSync("./test.txt","Hey there")
fs.writeFile("./test2.txt","Asynchronous",(err)=>{})
const result = fs.readFileSync("./test.txt","utf-8")
console.log(result)
//async doestn't return any value,we cannot assign variable to async  readFile
fs.readFile("./test2.txt","utf-8",(err,result)=>{
    if(err){
        console.log("error",err)
    }
    else{
        console.log(result);
    }
});
fs.appendFileSync("./test.txt",`hey there\n`)
//to copy a file
fs.cpSync("./test.txt","./copy.txt")
//to delete a file
fs.unlinkSync("./copy.txt")

//details of the file
console.log(fs.statSync("./test.txt"))
console.log(os.cpus().length);
