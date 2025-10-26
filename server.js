const express = require('express');

const app = express();

app.get('/health',(_req,res)=>{
    res.json({message: 'Success'});
});



app.listen(4000,()=>{
    console.log('I am listening on port no 4000');
});