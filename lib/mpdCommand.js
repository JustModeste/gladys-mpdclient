module.exports = function mpdCommand(mpdcommand, host = 'localhost', port = 6600) {
	var mpd = require('mpd');
	var cmd = mpd.cmd;
	var client = mpd.connect({
		port: port,
		host: host
	});

	client.on('ready', function() {
		console.log("ready");
		client.sendCommand(cmd(mpdcommand, []), function(err, msg) {
			if (err) {
				throw err;
			}
			console.log(msg);
		});
	});

	client.on('system', function(name) {
		console.log("update", name);
	});
	client.on('system-player', function() {
		client.sendCommand(cmd("status", []), function(err, msg) {
			if (err) throw err;
			console.log(msg);
		});
	});
};

