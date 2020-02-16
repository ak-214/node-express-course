const express = require("express");
const app = express();

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

app.listen(8000,() => {
    console.log("server is listening");
});