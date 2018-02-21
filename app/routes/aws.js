var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');
AWS.config.apiVersions = {
	dynamodb: 'latest'
}

var db = new AWS.DynamoDB();


router.get('/table-list', function(req, res, next) {
	console.log('Attempting AWS connection.');

	db.listTables(function(err, data) {
		if (err) {
			console.log('ERROR!');
			throw (err);
		}

		console.log(data.TableNames);
	});

	res.send('AWS Success, see console.');
});

module.exports = router;
