module.exports = function(sails) {

	var setup = require('./lib/mpdclient.setup.js');
	var init = require('./lib/mpdclient.init.js');
	var music = require('./lib/music/index.js');

	gladys.on('ready', function() {
		init();
	});

	return {
		setup,
		init,
		music
	};
};
