//connect to db 

const mongoose = require('mongoose');

function connectDB() {
     mongoose.connect("mongodb://localhost:27017/foodsohum")

     .then(() => {
         console.log("Connected to MongoDB");
     })
     .catch((err) => {
        console.log("Not connect ed to MongoDB", err);
     })
}

module.exports = connectDB; 
