var init = require('./mpdclient.init.js');

module.exports = function setup() {
	var newDevice = {
		device: {
			name: `MPD Client`,
			protocol: `wifi`,
			service: `mpdclient`,
			identifier: `192.168.0.111:6600`
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
