var shared = require('./shared.js');

module.exports = function mpdCommand(mpdcommand, deviceid) {
	return new Promise(function(resolve, reject) {
		if(!shared.instances[deviceid]) {
			return reject(`No mpdclient with deviceId ${deviceid}`);
		}
		var device = shared.instances[deviceid];

		var mpd = require('mpd');
		var cmd = mpd.cmd;
		var client = mpd.connect({
			host : device.host,
			port : device.port
		}).on('ready', function() {
			console.log("ready for : " + mpdcommand);
			this.sendCommand(cmd(mpdcommand, []), function(err, msg) {
				if (err) {
					throw err;
				}
				console.log(msg);
			});
		});
	});
};
