var userSchema = require('../schema/schema.js');
var Ajv = require('ajv');

var ajv = new Ajv();

exports.validateRegisterStudentSchema = function (requestBody, callback) {
	var schema = userSchema.registerStudentSchema;
	var validate = ajv.compile(schema);
	var valid = validate(requestBody);
	if (valid) {
		callback(null, true);
		return;
	}
	else {
		callback(true, true);
		return;
	}
}
