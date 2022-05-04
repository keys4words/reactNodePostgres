const express = require('express');
const app = express();

app.get("/test", (req, res)=>{
    res.send("Our API server is working...");
});

app.listen(3000, ()=>{
    console.log("Started API service");
});