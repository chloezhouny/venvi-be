var db = require("../models");

module.exports = {

	getAllUsers: function (req, res) {

		db.User.findAll({})
			.then(dbUser => res.json(dbUser))
			.catch(err => res.status(422).json(err));
	},

	getUser: function (req, res) {

		db.User.findOne({ where: { id: req.params.id } })
			.then(dbUser => res.json(dbUser))
			.catch(err => res.status(422).json(err));
	},

	addUser: function (req, res) {

		db.User.create(req.body, { username: req.body.username })
			.then(dbuser => {
				res.json(dbuser);
			})
			.catch(err => res.status(422).json(err));
	},

}



