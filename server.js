const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const mockUserData = [
    {name: "Anil"},
    {name: "Rohit"}
];

app.get('/users/:id', (req,res)=>{
    console.log(req.params.id);
    
    res.json({
        success: true,
        message: 'successfully got user. Nice!',
        user: req.params.id
    });
});

app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    const mockUserName = "Anil";
    const mockPassword = "kadam";

    if(username === mockUserName && password === mockPassword) {
        res.json({
            success: true,
            message: 'password and username match',
            token: 'encrypted token goes here'
        });
    } else {
        res.json({
            success: true,
            message: 'password and username do not match'
        });
    }
});

app.listen(8000,() => {
    console.log("server is listening");
});