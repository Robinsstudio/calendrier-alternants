const mongoose = require('mongoose');

const Apprentice = mongoose.model('Apprentice', {
	name: String
});

module.exports = Apprentice;