// creating a server

const express =  require('express');

const app = express(); 

//Dummy route for testing the server connection
app.get('/', (req, res) => {
    res.send(
        console.log("Server is running on port 3000")
    );
}) 


module.exports = app;


