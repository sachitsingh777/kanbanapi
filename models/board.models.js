const mongoose=require("mongoose")

const BoardSchema=mongoose.Schema({
 
        _id: ObjectId,
         name: String,
         tasks: [{ type: ObjectId, ref: 'Task'}]
    
})

const BoardModel=mongoose.model("user",BoardSchema)
module.exports={BoardModel}