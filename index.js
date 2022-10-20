const express = require("express");
const app = express();
const cors = require("cors");
const tourRouter = require("./Routes/Tour.Route");
const errorHandler = require("./Middleware/errorHandler");
const DBConnect = require("./Utils/dbConnect");
require('dotenv').config();
const port = process.env.PORT || 8080;


/* Application Middleware */
app.use(express.json())
app.use(cors())


// database connection
DBConnect()


/* Home Route */
app.get('/', (req, res) => {
    res.send("Tour Management Website");
})



/* All Tour Route */
app.use("/tours", tourRouter);



/* Undefined Route */
app.all('*', (req, res) => {
    res.send('No Route Found')
})


/* Global Error Handler*/
app.use(errorHandler);


process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
        process.exit(1);
    })
})


// server
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});