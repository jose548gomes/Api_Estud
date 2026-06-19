const express = require('express');
const auth = require('../middleware/auth');
const { getSubjects, createSubject, updateSubject, deleteSubject } = require('../controllers/subjectController');

const router = express.Router();
router.use(auth);

router.get('/', getSubjects);
router.post('/', createSubject);
router.put('/:id', updateSubject);
router.delete('/:id', deleteSubject);

module.exports = router;