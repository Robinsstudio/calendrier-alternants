const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/calendar', { useNewUrlParser: true });

const router = express.Router();

router.use('/api/', require('./routes'));

module.exports = router;