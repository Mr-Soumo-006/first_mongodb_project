const express=require('express')
const mongoose=require('mongoose')
const app=express()
app.use(express.json())
mongoose.connect('mongodb://127.0.0.1:27017/Mongodb_first').then(()=>{
    console.log("Mongodb Connected")
}).catch((error)=>{
    console.log("Mongodb connection failed: ",error)
})
 
//Schema created
const studentSchema=new mongoose.Schema({
    name:String,
    age:Number
})

const student=mongoose.model("Student",studentSchema) //it will send the schema to the collection 

app.patch('/edit',async (req,res)=>{
    //and will return the table blue print

    // app.post('/add',async (req,res)=>{
    //     const demoname="Soumo Nasker"
    //     const demoage=19

    //     const std=new student({name:demoname,age:demoage});
    //     await std.save()
    //find function: returns all the student
    //findone function: returns one student based on some condition
    //findById function: return data based on id
    //const std=await student.find({age:20});
    //const std=await student.findOne({age:20});
    //const std=await student.findById("69ff0184951652d14e572ffe");
    //const std=await student.find(); //collection of object
    // return res.json({"message":"Data saved successfully..."})
    //updateOne: based on some conditions=>updates the data then
    await student.updateOne({_id:"69ff0184951652d14e572ffe"},{age:20})
    await student.updateOne({_id:"69fefdc2b53c13f6959b503b"},{name:"Soumo Naskar"})
    //return res.json({"data":std})
    return res.json({"message":"Data saved successfully..."})
})

app.listen(5000,()=>{
    console.log("Server started on port: 5000")

})