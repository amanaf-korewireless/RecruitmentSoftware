exports.registerStudentSchema = {
	"type": "object",
	"properties": {
		"name": {
			"type": "string",
			"minLength": 1
		},
		"college": {
			"type": "string",
			"minLength": 1
		},
		"yop": {
			"type": "string",
			"minLength": 1
		},
		"sslcPercentage": {
			"type": "string",
			"minLength": 1
		},
		"plusTwoPercentage": {
			"type": "string",
			"minLength": 1
		},
		"degreePercentage": {
			"type": "string",
			"minLength": 1
		},
		"mobile": {
			"type": "string",
			"minLength": 1
		},
		"email": {
			"type": "string",
			"format": "email"
		},
		"password": {
			"type": "string",
			"minLength": 8,
			"maxLength": 24
		}
	},
	"additionalProperties": false,
	"minProperties": 9
};

exports.loginSchemaSchema = {
	"type": "object",
	"properties": {
		"email": {
			"type": "string",
			"format": "email"
		},
		"password": {
			"type": "string",
			"minLength": 8,
			"maxLength": 24
		}
	},
	"additionalProperties": false,
	"minProperties": 2
};

exports.viewResultSchema = {
	"type": "object",
	"properties": {
		"email": {
			"type": "string",
			"format": "email"
		},
		"token": {
			"type": "string",
			"minLength": 1
		}
	},
	"additionalProperties": false,
	"minProperties": 2
};
