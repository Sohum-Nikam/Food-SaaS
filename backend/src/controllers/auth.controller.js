//logic of routes is written here:
 
const userModel = require('../models/user.model');
const bcrypt = require('bcryptjs');

//controller function here:
async function registerUser(req, res) {
    
    const {fullName, email, password} = req.body;  //--> destructuring the request body to get the user details

    //checks if the user with the same email alreay exists in the database or not
    const isUserAlreadyExists = await userModel.findOne({
        email
    })

    //If yes, it will reyurn this: 
    if(isUserAlreadyExists) {
         return res.status(400).json({
            message:"User already exists",
         })
    }

    // hashing the password using bcrypt library if the " user does not exists"
    const hashedPassword = await bcrypt.hash(password, 10);  //--> hashing the password with a salt of 10 rounds for security 


    //now the user will be created in the database with the hashed password and other details
    const user = await userModel.create ({
        fullName,
        email,
        password: hashedPassword
    }) 


    //token is used to authenticate the user and to keep the user logged in for a certain period of time without asking for credentials again and again
    //token also stores data in form of credentials
    //for jwt secret key always use a balanced key length cause long string key may give you error and 
    const token = jwt.sign({
        id: user._id,
    })
}





