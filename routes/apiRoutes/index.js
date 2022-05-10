const router = require('express').Router();
const notes = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs'); 
const path = require('path');


router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    let newNote = req.body;

    newNote.id = uuidv4();

    notes.push(newNote);

        fs.writeFile('../../db/db.json', JSON.stringify(notes), err => {
            if (err) {
                return console.log(err);
            }
            console.log('Note Saved!')
            
        })
        return res.json(newNote);
})



  module.exports = router;