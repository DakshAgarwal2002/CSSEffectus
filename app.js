const express=require('express');
const path=require('path')
const app=express();
const hbs=require('hbs')
require("./src/db/conn")
const PostFeedback=require("./src/models/PostFeedback")
const port=process.env.PORT||9000
const static_path=path.join(__dirname)
const tempelate_path=path.join(__dirname,"/tempelates/views")
const partial_path=path.join(__dirname,"/tempelates/partials")
app.use(express.static(static_path))
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.set('view engine','hbs')
app.set('views',tempelate_path)
hbs.registerPartials(partial_path)

app.get("/",(req,res)=>{
    // res.send("Hello this is Home page")
    res.render('htmlCompiler')
})
app.post("/", async(req,res)=>{
    try{
        const newFeedback=new PostFeedback({
            feedbackValue: req.body.feedbackValue
        })
        const FeedbackSaved=await newFeedback.save();
        res.status(201).render('htmlCompiler')
    }
    catch(error){
        res.status(400).send(error);
    }
} )
app.get("/test",(req,res)=>{
    // res.send("Hello this is About page")
    res.render('test')
})
app.get("/about",(req,res)=>{
    // res.send("Hello this is About page")
    res.render('about')
})
// app.get("/weather",(req,res)=>{
//     res.render('weather')
// })
// app.get("*",(req,res)=>{
//     res.render('404error')
// })
app.listen(port,()=>{
    console.log(`Port listening ${port}`)
})