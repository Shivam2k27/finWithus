import express from 'express';
const app = express();

app.get('/',(req,res)=>{
  res.send("hello shivam")
})

app.get('/req',(req,res)=>{
  res.send(req);
  console.log(req);
})

const port = 3001;

app.listen(port ,()=>{
    console.log('server up and running')
})