const mongo = require('../shared/connect');
const {ObjectId} = require("bson")


module.exports.getfurnitureDetails = async(req,res,next)=>{
    try{
        var data = await mongo.db.collection("furnitureDetails").find().toArray();
        res.send(data);
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
}

