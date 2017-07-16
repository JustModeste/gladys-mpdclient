module.exports = function getQueue(params){
	var infos = params.deviceType.identifier.split(':');

	console.log(params);
	var list = [];

	list.push({
		title: infos[0]
  });

	return Promise.resolve(list);

    //return mpdCommand('status', infos[0], infos[1]);
};
