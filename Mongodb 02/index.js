const mongodb = require("mongodb").MongoClient

const URL  = "mongodb://localhost:27017"

let connectDB = async () => {

    let connect = await mongodb.connect(URL)
    let database = connect.db("myDatabase")

    // let collection = await database.createCollection("col2")
    // await collection.insertOne({name:"dsfsdf"})


    let collections = await database.listCollections().toArray()
    console.log(collections)
    
    collections.map(async (i)=>{
        if(i?.name==="col1"){

            let col =  database.collection("col1")
            await col.insertOne({name:"saurav"})
            console.log("Created")

        }
    })
    

}

connectDB()