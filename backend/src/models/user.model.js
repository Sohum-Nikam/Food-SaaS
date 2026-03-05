//designing the user schema of the database using mongoose
//basically defining the structure of the user document in the database via tables

const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true 
    }
},
    { 
        timestamps: true
    }   
);
//declaration of the user model based on the user schema and exporting it to be used in other parts of the application
const userModel = mongoose.model('User', userSchema);

//exporting the user model to be used in other parts of the application
module.exports = userModel;