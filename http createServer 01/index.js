// const http = require("http");
// const fs = require("fs");

// http.createServer((req, res) => {


//     if (req.url === "/") {
//         res.writeHead(200,"OK",{"Content-Type":"text/html"})
//          fs.createReadStream("./index.html", "utf-8").pipe(res)
     
//         console.log("Home page served");
//     } 

//     else if (req.url === "/about") {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write("About Us");
//         res.end();
//     } 
    
//     else if (req.url === "/contact") {
//         try {
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             const response = fs.createReadStream("./contact.html", "utf-8");
//             response.pipe(res);
//             console.log("Contact page served");
//         } catch (error) {
//             console.log("Error:", error);
//             res.writeHead(500);
//             res.end();
//         }
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.write("404 Not Found");
//         res.end();
//     }
// }).listen(400, (err) => {
//     if (err) throw err;
//     console.log("Server is running at port 400");
// });









