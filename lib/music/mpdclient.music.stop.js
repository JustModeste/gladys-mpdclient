var mpdCommand = require('../mpdCommand.js');

module.exports = function stop(params){
	console.log('stop device : ' + params.deviceType.device);
	return mpdCommand('stop', params.deviceType.device);
};
