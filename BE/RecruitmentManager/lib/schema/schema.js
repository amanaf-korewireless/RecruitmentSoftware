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
		},
		"batch": {
			"type": "string",
			"minLength": 1
		}
	},
	"additionalProperties": false,
	"minProperties": 10
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

exports.updateResultSchema = {
	"type": "object",
	"properties": {
		"email": {
			"type": "string",
			"format": "email"
		},
		"writingTestResult": {
			"type": "string",
			"minLength": 1
		},
		"aptitudeTestResult": {
			"type": "string",
			"minLength": 1
		},
		"technicalRound1Result": {
			"type": "string",
			"minLength": 1
		},
		"technicalRound2Result": {
			"type": "string",
			"mintechnicalRound2ResultLength": 1
		},
		"hrRound2Result": {
			"type": "string",
			"minLength": 1
		}
	},
	"additionalProperties": false,
	"minProperties": 6
};
