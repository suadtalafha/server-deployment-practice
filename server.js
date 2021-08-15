'use strict ';

const express=require('express');
const app=express();


const notFoundHandelar=require('./handelar/404');
const errorHandelar=require('./handelar/500');

app.get('/',(req,res)=>{
    res.status(200).send('Hello World')
});

app.get('/data',(req,res)=>{
    let output={
        10:'even',
        5:'odd',
        time:new Date().toString()
    }
    res.status(200).json(output)
});

app.get('/bad',(rea,res,next)=>{
    next('error from bad end point')
});

app.use('*',notFoundHandelar);
app.use(errorHandelar);

function start(port){
    app.listen(port,()=>console.log(`Server started on port${port}`))
}

module.exports={
    start,
    app
}