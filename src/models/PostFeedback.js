const mongoose=require("mongoose")
const feedbackSchema=new mongoose.Schema(
    {
        feedbackValue:{
            type:String,
            required:true
        }
    }
)
const Postfeedback=new mongoose.model("Postfeedback",feedbackSchema);
module.exports=Postfeedback;