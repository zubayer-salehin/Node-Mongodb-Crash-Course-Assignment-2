const express = require("express");
const app = express();
const cors = require("cors");
const tourRouter = require("./Routes/Tour.Route");
const errorHandler = require("./Middleware/errorHandler");


/* Application Middleware */
app.use(express.json())
app.use(cors())


/* Home Route */
app.get('/', (req, res) => {
    res.send("Tour Management Website");
})



/****** All Tour Route ******/
app.use("/tours", tourRouter);



/* Undefined Route */
app.all('*', (req, res) => {
    res.send('No Route Found')
})


/* Global Error Handler*/
app.use(errorHandler);


module.exports = app;