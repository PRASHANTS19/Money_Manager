const mongoose = require('mongoose');

const conn = mongoose.connect("mongodb+srv://sahuprashant29:Hello@expensedetails.ska1s.mongodb.net/?retryWrites=true&w=majority")
        .then(db => {
            console.log("Database Connected");
            return db;
        }).catch(err => {
            console.log("Connection Error");
        })

module.exports = conn;