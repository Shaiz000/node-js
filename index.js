
    // <-- addition of simple variables -->

// var x=20;
// let y=30;
// const z=40;
// console.warn(x+y+z);

    // <-- if condition -->

// var x=20;
// if (x===20) 
// {
//     console.log("matched")    
// }

    //  <-- for loop -->

// var x=20;
// for (i=0;i<10;i++) 
// {
//     console.log(i)    
// }

    //  <-- array -->

// const arr=[2,4,7,1,3,8,3];
    // console.log(arr);   


    // <-- for filter from array -->

// const arr=[2,4,7,1,3,8,3];
// let result = arr.filter((item)=>{
//     return item===3
// })
// console.warn(result)


    // <-- for import other files -->


//   const app = require('./app')
//   console.log(app.z());


// <--  Core Modules are: fs,Buffer,HTTP   -->



    // <-- for create file and import non-global modules -->

// const fs= require('fs');
// console.log("Hi User");
// fs.writeFileSync("Hello2.txt","Welcome 2 User")


    // <-- for import specific non-global modules -->

// const fs= require('fs').writeFileSync;
// fs("hi.txt","Welcome 2 User")


    // <-- to watch your directory and file -->

// const fs= require('fs');
// console.log("->>",__dirname);
// console.log("->>",__filename);


// const http = require('http');
// http.createServer((req,res)=>{
//     res.write("<h1>Hello this is shaiz</h1>");
//     res.end();
// }).listen(4500);



    // <-- Arrow function -->

// function  test(a)
// {
//     return a*100;
// }

// const test =(a)=>a*100;


    // <-- Create Server -->

// const http = require('http');
// const dataControl = (req,res) =>
// {
//     res.write("<h1>Hey! This is shaiz</h1>");
//     res.end();
// }
// function  dataControl(req,res)
// {
//     res.write("<h1>Hey! This is shaiz</h1>");
//     res.end();
// }
// http.createServer(dataControl).listen(4500);
