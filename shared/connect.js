const {MongoClient} = require("mongodb");


module.exports =  {
db:{},
async connect(){
try{
    const client = await MongoClient.connect("mongodb+srv://lakshmi:Hf90Oj4dW1p1O1Qw@cluster0.j1d6d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"); 
    this.db = client.db("integra");
    console.log(this.db)
}catch(err){
    console.log(err)
}
}
}