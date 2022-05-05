const router = require('express').Router();
const { notes } = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs'); 



router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes'), (req, res) => {
    
}


// function showData() {
//     fs.writeFile('db/db.json', JSON.stringify(notes), err => {
//         if (err) throw err;
//         return true;
//     })
// }
  module.exports = router;