const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Welcome to the express server');
});

app.get('/profile',(req,res)=>{
    const obj = {
        name: 'kamrul hasan',
        email: 'kamrul@email.com',
        phone: '01799999999999',
        adderss: 'Dhaka, Bangladesh'
    }

    res.json(obj);
})


app.listen(4000,()=>{
    console.log('I am listening on port no 4000');
});