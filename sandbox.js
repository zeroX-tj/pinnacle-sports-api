var pinnacleAPI = require('./PinnacleAPI.js');

var pinnacle = new pinnacleAPI('JQ667294', 'Stefen15!');

pinnacle.setEnvironmentDev();
pinnacle.getLeagues({sportid: 33}, function(err, response, body) {
	console.log(err);
});