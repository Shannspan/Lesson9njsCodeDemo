// require this file from the index.js 
//initilise the express object by requiring the express library (our framework)
const express = require('express');

//initilise the express router inbuilt function (our router module)
let router = express.Router();

const mongoose = require('mongoose');

//use mongoose model to declare the expense object so we can retrieve data from mongodb
//***** I think this is where my code is failing to import from mongo db
const Expense = mongoose.model('Expense');

//use get method to declare route - no CRUD operations required for route folder? why? 
router.get('/', (req, res) => {
    // place holder home page
});

// now we write the router logic: 
// Router function for expense/list 
//(/expense is already specified in index.js so we only need to specify remaining path here)
router.get('/list', (req,res) => {
    Expense.find((err, docs) => {
        console.log(docs);
        if (!err) {
            res.send(docs)
        } else {
            console.log('Error in retrieval:' + err);
        }
        })
});

router.get('/:id', (req,res) => {
    Expense.findById(req.params.id, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            console.log('Error in retrieval:' + err);
        }
        })
});


// export newly created router module
module.exports = router;