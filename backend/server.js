//starting a server and calling a database connection function
const app  = require('./src/app');
const connectDB = require('./src/db/db');

connectDB();

app.listen(3000, () => {
    console.log('Server is running on port 3000'); 
})


