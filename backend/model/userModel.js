const mongoose = require('mongoose')

const userSchema=new mongoose.Schema({
    selectedRequirement:String,
    selectedMeal:String,
    numberOfPeople:Number,
    startDate:String,
    startTime:String,
    endDate:String,
    selectedRequirements:String,

})

const userModel=mongoose.model("chef",userSchema);
module.exports=userModel;