//Load mongodb driver
const {MongoClient} = require('mongodb').MongoClient

//Create mongo client
const url = 'mongodb+srv://superadmin:Boom1920020102@cluster0.wl5lq.mongodb.net/sample_mflix?retryWrites=true&w=majority'
const client = new MongoClient(url,{useNewUrlParser:true})

async function run(){
    try{
//Create connection to mongodb
await client.connect()

//Connect to database
const db = client.db('sample_mflix')

//Retrieve collection
const collection = db.collection('movies')

//Query data
const query = { rated:'TV-G' }
const cursor =  collection.find(query)
await cursor.forEach(console.dir)
    }catch(e){
    console.log(e)
} finally{
    await client.close()
}
    }
run().catch(console.dir)