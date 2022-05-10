const router = require('express').Router();
const notes = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs'); 

// Get request to show all notes
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

// Post request to add a new note 
router.post('/notes', (req, res) => {
    let newNote = req.body;
    // give new note an unique id
    newNote.id = uuidv4();

    // push new note to notes array
    notes.push(newNote);

        // write file to show updated note column
        fs.writeFile('db/db.json', JSON.stringify(notes), err => {
            if (err) {
                return console.log(err);
            }
            console.log('Note Saved!')
            
        })
        return res.json(newNote);
})

// Delete request to remove saved note
router.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;

    // loop through saved notes and delete note with the same id
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === noteId) {
            notes.splice(i, 1);
        }
    };

    fs.writeFile('db/db.json', JSON.stringify(notes), err => {
        if (err) {
            return console.log(err);
        }
        console.log('Note Deleted!')
        
    })
    return res.json(notes);
});

module.exports = router;