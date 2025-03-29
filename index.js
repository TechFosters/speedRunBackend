//const express = require('express')
import express from "express";
import dotenv from "dotenv"; 

dotenv.config();

const app = express(); //function call, app ke pass reference
//const port = 3000; //web server kisi na kisi port pe chlega..65000(approx) //4000, 5000, 5173, 8080, 8000 //{80, 443, 23} <= don't use


const port = process.env.PORT || 4000;

//get type ki request slash(origin) pe aarhi...
//req me jo bhi aega vo milega...hum response me 'Cohort!' bhej rahe
app.get('/', (req, res) => { 
  res.send('Cohort!')
});

app.get("/tech",(req,res)=>{
    res.send('TechFosters!')
});

app.get('/geek',(req,res)=>{
    res.send('GeekFosters')
});

app.get("/hello",(req, res)=>{
  res.send("Hello World!")
})



app.get('/learn',(req,res)=>{
    res.send('Study!')
})
//below pice of code sabse phle run krega

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log(process.env)


