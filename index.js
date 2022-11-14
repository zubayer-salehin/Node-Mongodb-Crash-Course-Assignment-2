require('dotenv').config();
const port = process.env.PORT || 8000;
const app = require('./app');
const dbConnect = require("./Utils/dbConnect");


/* Database Connection */
dbConnect();


/* Server Listen on PORT */
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});


/* Uncaught Error Handler */
process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
        process.exit(1);
    })
})