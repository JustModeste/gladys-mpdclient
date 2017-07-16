var mpdCommand = require('../mpdCommand.js');

module.exports = function next(params){
	console.log('next device : ' + params.deviceType.device);
	return mpdCommand('next', params.deviceType.device);
};
