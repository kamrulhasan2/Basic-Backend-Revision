const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Welcome to the express server');
});


app.listen(4000,()=>{
    console.log('I am listening on port no 4000');
});