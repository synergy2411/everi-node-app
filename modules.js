// External Modules
//  - npmjs.com

// npm install chalk --save
// npm init

// let chalk = require("chalk");
// console.log(chalk.green("Welcome to Node"));
// console.log(chalk.inverse.green("Welcome to Node"));
// console.log(chalk.bold.red("Welcome to Node"));


// Native / Core Module
// const path = require("path");

// const url = "http://www.example.com/public/index.html";

// console.log(path.extname(url));
// console.log(path.basename(url));
// console.log(path.dirname(url));

// const os = require("os");
// console.log("Total Memory : ", os.totalmem());
// console.log("Arch :  : ", os.arch());
// console.log("CPU'S :  : ", os.cpus().length);


// const http = require("http");

// const server = http.createServer((request, response)=>{
//     console.log("Method : ", request.method);
//     // console.log(request);

//     response.write("Hello from Server");

//     response.end();
// })

// server.listen(9090, ()=>{
//     console.log("Server started at 9090...");
// })


// const fs = require("fs");

// // fs.readFile("./package.json", (err, data)=>{
// //     console.log(data.toString());
// // })

// const data = fs.readFileSync("./package.json");

// console.log(data);

// console.log("Hello FS");

// const yargs = require("yargs");
// console.log(process.argv);
// console.log(yargs.argv)