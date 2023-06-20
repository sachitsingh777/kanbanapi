const mongoose=require("mongoose")

const SubTaskSchema=mongoose.Schema({
    _id: ObjectId,
       title : String,
       isCompleted : boolean
   }
   )

const SubTaskModel=mongoose.model("user",SubTaskSchema)
module.exports={SubTaskModel}