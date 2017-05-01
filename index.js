module.exports = function(sails) {

	return {
		install: require('./lib/install.js'),
		mpdCommand:  require('./lib/mpdCommand.js')
	};
};

