const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.json({ mssg: 'GET all workouts' });
});

router.get('/:id', (req, res) => {
	res.json({ mssg: 'GET workout with ID: ' + req.params.id });
});

router.post('/', (req, res) => {
	res.json({ mssg: 'POST a new workout' });
});

router.delete('/:id', (req, res) => {
	res.json({ mssg: 'DELETE workout with ID: ' + req.params.id });
});

router.patch('/:id', (req, res) => {
	res.json({ mssg: 'UPDATE workout with ID: ' + req.params.id });
});

module.exports = router;
