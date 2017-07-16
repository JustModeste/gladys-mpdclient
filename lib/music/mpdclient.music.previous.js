var mpdCommand = require('../mpdCommand.js');

module.exports = function previous(params){
	console.log('previous device : ' + params.deviceType.device);
	return mpdCommand('previous', params.deviceType.device);
};
