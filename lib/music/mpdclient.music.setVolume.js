var mpdCommand = require('./mpdCommand.js');

module.exports = function play(params){
	var infos = params.deviceType.identifier.split(':');

    return mpdCommand('setvol', infos[0], infos[1], [params.volume]);
};
