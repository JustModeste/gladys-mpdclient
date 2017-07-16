var shared = require('./shared.js');
var mpd = require('mpd');

module.exports = function init() {
	return gladys.device.getByService({service: 'mpdclient'})
		.then((devices) => {
			// reset all instances
			shared.instances = {};

			// foreach device, create an instance
			devices.forEach(function(device){
				// separate IP and port
				var infos = device.identifier.split(':');
				shared.instances[device.id] = {
					'host': infos[0],
					'port': parseInt(infos[1])
				};
			});
		});
};
