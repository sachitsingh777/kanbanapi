const mongoose=require("mongoose")

const TaskSchema=mongoose.Schema({
    _id: ObjectId,
       title : String,
       description : String,
       status : {type: String, enum: ['Todo', 'Doing', 'Done'], default: 'Todo'},
       subtask : [{ type: ObjectId, ref: 'Subtask'}]
   }
   )

const TaskModel=mongoose.model("user",TaskSchema)
module.exports={TaskModel}