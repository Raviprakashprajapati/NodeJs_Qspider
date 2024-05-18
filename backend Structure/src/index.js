
import { loadEnvFile } from "process";
import app from "./app.js";
import connectDb from "./db/db.js";
loadEnvFile(".env")


connectDb()
.then((value)=>{

    
app.listen(process.env.PORT, (err) => {
    if(err) throw err;
    console.log("server listening on port " + process.env.PORT)
})

})
.catch((err)=>{
    console.log("Error in database: " + err.message)
})