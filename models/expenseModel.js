// inside this file we mention the schema & import mongoose library

const mongoose = require('mongoose');

// now create expense schema 
// keep all types as strings for now

let expenseSchema = new mongoose.Schema({
    Expense: {
        type: String,
        required: 'This field is required'
    },
    Amount: {
        type: String,
        required: 'This field is required'
    },
    Date: {
        type: String,
        required: 'This field is required'
    },
    Notes: {
        type: String,
        required: 'This field is required'
    }
}, {
    // to stop display of v number showing with each record
    // versionKey: false
});

//call mongoose and model and schema

mongoose.model('Expense', expenseSchema);

// now run   $ nodemon index.js in terminal 
// ingnore deprecation warning this is just letting you know a new version is coming out