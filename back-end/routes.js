const express = require('express');

const router = express.Router();

router.get('/coucou/:id', (req, res) => {
	res.send(req.params.id);
});

module.exports = router;