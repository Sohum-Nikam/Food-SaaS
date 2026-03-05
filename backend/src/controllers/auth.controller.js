//logic of routes
const userModel = require('../models/user.model');

//controller function here:
async function registerUser(req, res) {
    
    const {fullName, email, password} = req.body;  //--> destructuring the request body to get the user details

    const isUserAlreadyExists = await userModel.findOne({
        email
    })

    if(isUserAlreadyExists) {
         return res.status(400).json({
            message:"User already exists",
            
         })
    }

}