const express = require("express");
const app = express();

const mockUserData = [
    {name: "Anil"},
    {name: "Rohit"}
];

app.get('/users', (req,res)=>{
    res.json({
        success: true,
        message: 'successfully got user. Nice!',
        users: mockUserData
    });
});

app.listen(8000,() => {
    console.log("server is listening");
});