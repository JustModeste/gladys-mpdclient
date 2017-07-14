var mpdCommand = require('./mpdCommand.js');

module.exports = function play(params){
	var infos = params.deviceType.identifier.split(':');

    return mpdCommand('next', infos[0], infos[1]);
};
