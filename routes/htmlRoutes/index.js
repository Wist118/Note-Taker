const path = require('path');
const router = require('express').Router();

// Get request to homepage
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// Get request to send user to notes page
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});


module.exports = router;