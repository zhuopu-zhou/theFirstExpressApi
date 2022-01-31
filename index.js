const { request, response } = require("express");

// bring express lib
const express = require("express");
//create a express api called app
const app = express();

app.get('/',(request,response)=>{
    response.send('My first express api ... works!')
})

// 
app.listen(3000, () => console.log("Listening on port 3000..."));
