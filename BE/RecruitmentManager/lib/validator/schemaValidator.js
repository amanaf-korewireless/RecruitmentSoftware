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

exports.validateLoginSchema = function (requestBody, callback) {
	var schema = userSchema.loginSchemaSchema;
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

exports.validateViewResultSchema = function (requestBody, callback) {
	var schema = userSchema.viewResultSchema;
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
