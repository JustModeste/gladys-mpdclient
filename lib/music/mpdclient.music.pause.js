var mpdCommand = require('../mpdCommand.js');

module.exports = function pause(params){
	console.log('pause device : ' + params.deviceType.device);
	return mpdCommand('pause', params.deviceType.device);
};
