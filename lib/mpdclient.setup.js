var init = require('./mpdclient.init.js');

module.exports = function setup() {
	var newDevice = {
		device: {
			name: `MPD Client`,
			protocol: `mpd`,
			service: `mpdclient`,
			identifier: `host:port`
		},
		types: [{
			name: 'Music',
			type: 'music',
			identifier: 'music',
			sensor: false,
			min: 0,
			max: 0
		}]
	};

	return gladys.device.create(newDevice)
		.then(() => init());
};
