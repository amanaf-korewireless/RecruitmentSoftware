var jwt = require('jwt-simple');
var config = require('../config/serverConfig.json');

exports.genToken = function genToken(email, callback) {
	try {
		var expire = expiresInDays(18250);
		var token = jwt.encode({
			exp: expire,
			email: email
		}, config.jwt.secret, config.jwt.algorithm);
		callback(null, { token: token, expire: expire });
		return;
	} catch (ex) {
		callback(true, null);
		return;
	}
}

function expiresInDays(numDays) {
	var dateObj = new Date();
	return dateObj.setDate(dateObj.getDate() + numDays);
}