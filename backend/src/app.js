// creating a server

const express =  require('express');

const app = express(); 
app.use(express.json()); // Middleware to read express json data from the request body 

//middleware brings data to req.body and makes it readable and usable as express files cannot be read directly by servers
//the data can be fetched from the frontend and sent to the backend in the form of json and this middleware will make it readable by the server

//Dummy route for testing the server connection
app.get('/', (req, res) => {
    res.send(
        console.log("Server is running on port 3000")
    );
}) 


module.exports = app;


