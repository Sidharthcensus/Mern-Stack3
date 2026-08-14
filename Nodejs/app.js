// Modules Local modules 
// Customm modules 


// const math =require("./math")
// console.log(math.add(4,6))

// const fs=require("fs")
// console.log(fs)
// fs.mkdir("NodeFolder",(err)=>{
//     if(err){
//         console.error(err)
//         return
//     }
//     console.log("file created ")
// })

// `fs.writeFile('NodeFolder/Node.txt','Hi Good Morning Nodejs',(err)=>{
//     if(err){
//        console.error(err)
//        return
//     }
//     console.log("Created Sucessfully")
// })`
// fs.readFile('NodeFolder/Node.txt',"UTF-8",(err,data)=>{
//     if(err){
//    console.error(err)
//    return
//     }
//     console.log(data)
// })
// fs.appendFile("NodeFolder/Node.txt",'\n Good Day By Nodejs ',(err)=>{
//     if (err){
//         console.error(err)
//         return
//     }
//     console.log("Appended Suceesfully")
// })

// fs.unlink("NodeFolder/Node.txt",(err)=>{
//     if(err){
//     console.error(err)
//     }
//     console.log("Deleted Sucessfully")
// })

// fs.rmdir("NodeFolder",(err)=>{
//  if (err){
//     console.error(err)
//     return 
//  }

//     console.log("Folder deleted Sucessfully")
// })

// MOdule 1 Completed Named As FileSystem()



// Module 2 Path

// const filePath=require('path')    
// // console.log(filePath)
// const joinedPath = filePath.join('data', 'subfolder', 'user.json');
// console.log('join:', joinedPath); 

const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("home page")
    }
    else if(req.url=="/about"){
        res.end("About page")
    }
    else{
        res.end("404 Page not Found ")
    }
}) 

server.listen(5000,()=>console.log("server is running on http://localhost:5000"))