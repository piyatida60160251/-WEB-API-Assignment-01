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
//test
const db = client.db('sample_weatherdata')

//Retrieve collection


//Query data
const query = { callLetters:'VCSZ' }
const cursor =  collection.find(query)
await cursor.forEach(console.dir)
    }catch(e){
    console.log(e)
} finally{
    await client.close()
}
    }
run().catch(console.dir)