const express = require('express')
const mongoose = require('mongoose')
const cors=require('cors')
const userModel=require('./model/userModel')

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/chef');

app.post('/booking',(req,res)=>{
    const {selectedRequirement,selectedMeal,numberOfPeople,startDate,startTime,endDate,selectedRequirements}=req.body;
    userModel.create({selectedRequirement:selectedRequirement,selectedMeal:selectedMeal,numberOfPeople:numberOfPeople,startDate:startDate,startTime:startTime,endDate:endDate,selectedRequirements:selectedRequirements})
    .then(result=>res.json("data stored sucessfully"))
    .catch(err=>res.json(err))
    console.log("data created sucessfuly")
})

app.listen(3000,()=>{
    console.log("server is running ")
})