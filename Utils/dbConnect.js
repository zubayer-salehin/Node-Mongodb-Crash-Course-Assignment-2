const mongoose = require('mongoose');

function DBConnect() {
    mongoose.connect(`mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.5pmu7.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log(`Mongoess Connection Successfully`);
        })
}

module.exports = DBConnect;