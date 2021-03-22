const mongoose = require('mongoose');
const encryption = require('../../../utils/encryption');


//Define a schema
const Schema = mongoose.Schema;

const passportchema = new Schema({
	firstName: {
		type: String,
		trim: true,		
		required: true,
	},
	lastName: {
		type: String,
		trim: true,		
		required: false,
	},
	passNum: {
		type: String,
		trim: true,
		required: true
	}
});

passportchema.pre('save', function(next){
	this.passNum = encryption.encrypt(this.passNum)
	next();
});

module.exports = mongoose.model('Passport', passportchema)