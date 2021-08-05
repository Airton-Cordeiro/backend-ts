import express from 'express';

const app = express();

app.get("/", (req, res)=>{
    return res.send("Hello world 2 .0")
})

app.listen(3000, ()=>{
    console.log("Server is running")
})