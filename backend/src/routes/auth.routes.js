const express = require ('express');

const router = express.Router(); 

router.post('/user/register',  (req, res) => {
     // Handle user registration logic here
        res.send('User registered successfully');
})

module.exports = router;