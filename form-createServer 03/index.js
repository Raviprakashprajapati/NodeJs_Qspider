const http = require("http")
const fs = require("fs")
const {parse} = require("querystring")

http.createServer((req,res)=>{

    if(req.method=="POST"){
        
        let urlEncoded = "application/x-www-form-urlencoded";

        if(req.headers["content-type"]===urlEncoded){
           
            console.log("under headers")
            let body = ""

            req.on("data",(packet)=>{
                console.log("packets ",packet.toString())
                body+=packet.toString()
            })

            req.on("end",() => {

                console.log(parse(body))
                res.end(body)
            })
            

            
        }
        
        else{
            res.end("header galat hai")
        }

    }
    else{

        if(req.url==="/"){
            res.writeHead(200,"OK",{"Content-Type":"text/html"});
            fs.createReadStream("./index.html").pipe(res);
        }

        else if(req.url === "/form"){
            res.writeHead(200,"OK",{"Content-Type":"text/html"});
            fs.createReadStream("./form.html").pipe(res)
        }

        else{
            res.end("Page NOT FOUND")
        }

    }

})
.listen(8000,(err) => {
    if(err) throw err

    console.log("server is running at http://localhost:8000")
})