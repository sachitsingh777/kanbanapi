const express=require("express")
const cors=require("cors")
const { connection } = require("./db")
const { userRouter } = require("./routes/user.router")
const app=express()
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.use("/users",userRouter)


app.listen(8080,async()=>{
    try{
     await connection
    console.log("connected to the db")
    }
    catch(error){
        console.log(error)
        console.log("Not connected to the db")
    }
    console.log("server running at the port is 8080")
})