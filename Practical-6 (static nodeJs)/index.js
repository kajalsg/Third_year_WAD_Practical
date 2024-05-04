const express=require('express');
const app=express();//One variable that call the express function

app.use(express.static('public'))//Path provided

app.listen(4000,()=>{
    console.log("Server is Started");
})//provide port number with static call back function