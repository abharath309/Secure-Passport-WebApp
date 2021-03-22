
const movieModel = require('../models/passport');	
const decryption = require('../../../utils/encryption')			

module.exports = {
	getById: function(req, res, next) {
		movieModel.findOne({_id: req.params.userId}, {_id:0, __v: 0}, function(err, movieInfo){
			if (err) {
				next(err);
			} else {
				movieInfo.passNum = decryption.decrypt(movieInfo.passNum)
				res.json({status:"success", message: "Record found!!!", data: movieInfo});
			}
		});
	},

	getAll: function(req, res, next) {
		let passportList = [];

		movieModel.find({}, function(err, passport){
			if (err){
				next(err);
			} else{
				for (let movie of passport) {
					passportList.push({id: movie._id, name: movie.name, released_on: movie.released_on});
				}
				res.json({status:"success", message: "passport list found!!!", data:{passport: passportList}});
							
			}

		});
	},

	updateById: function(req, res, next) {
		movieModel.findByIdAndUpdate(req.params.userId,{name:req.body.name}, function(err, movieInfo){

			if(err)
				next(err);
			else {
				res.json({status:"success", message: "Movie updated successfully!!!", data:null});
			}
		});
	},

	deleteById: function(req, res, next) {
		movieModel.findByIdAndRemove(req.params.userId, function(err, movieInfo){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "Movie deleted successfully!!!", data:null});
			}
		});
	},

	create: function(req, res, next) {
		movieModel.create({ firstName: req.body.first_name, lastName: req.body.last_name, passNum: req.body.passport_num }, function (err, result) {
				  if (err) 
				  	next(err);
				  else
				  	var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
				  	res.json({status: "success", message: "Record added successfully!!!", data: fullUrl + '/' + result._id});
				  
				});
	},

}					