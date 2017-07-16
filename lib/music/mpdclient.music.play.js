var mpdCommand = require('../mpdCommand.js');

module.exports = function play(params){
	console.log('play device : ' + params.deviceType.device);
	return mpdCommand('play', params.deviceType.device);
};
