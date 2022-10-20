require('dotenv').config();
const app = require("./app");
const DBConnect = require('./utils/dbConnect');
const port = process.env.PORT || 8080;


// database connection
DBConnect();


// server
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});