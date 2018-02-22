var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');
AWS.config.apiVersions = {
	dynamodb: 'latest'
}

var db = new AWS.DynamoDB();

var params = {
	"TableName": "jnewmandesign_portfolio"
}


router.get('/table-list', function(req, res, next) {
	console.log('Attempting AWS connection.');

	db.listTables(function(err, data) {
		if (err) {
			throw (err);
		}

		console.log(data.TableNames);
	});

	db.scan(params, function(err, data) {
		if (err) {
			throw (err);
		}

		console.log(data);
	});

	res.send('AWS Success, see console.');
});

module.exports = router;
