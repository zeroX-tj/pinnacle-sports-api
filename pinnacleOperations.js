'use strict';

var operations = {
	getSports: {
		type: 'get',
		version: 'v2',
		endpoint: 'sports',
		devUrl: 'http://www.mocky.io/v2/571995d41200006e031b7192'
	},
	getLeagues: {
		type: 'get',
		version: 'v2',
		endpoint: 'leagues',
		required: ['sportId'],
		devUrl: 'http://www.mocky.io/v2/572163860f0000621a387386'
	},
	getFixtures: {
		type: 'get',
		version: 'v1',
		endpoint: 'fixtures',
		required: ['sportId'],
		devUrl: 'http://www.mocky.io/v2/57228c2e1200009c053e7653'
	},
	getSettledFixtures: {
		type: 'get',
		version: 'v1',
		endpoint: 'fixtures/settled',
		required: ['sportId'],
		devUrl: 'http://www.mocky.io/v2/5723a0c7250000ed07e2ed2d'
	},
	getTeaserGroups: {
		type: 'get',
		version: 'v1',
		endpoint: 'teaser/groups',
		required: ['oddsFormat'],
		devUrl: 'http://www.mocky.io/v2/5723db54250000bb11e2ed67'
	},
	getOdds: {
		type: 'get',
		version: 'v1',
		endpoint: 'odds',
		required: ['sportId'],
		devUrl: 'http://www.mocky.io/v2/5726d468100000252f6dd6ab'
	},
	getParlayOdds: {
		type: 'get',
		version: 'v1',
		endpoint: 'odds/parlay',
		required: ['sportId'],
		devUrl: 'http://www.mocky.io/v2/5726d508100000432f6dd6ac'
	},
	getTeaserOdds: {
		type: 'get',
		version: 'v1',
		endpoint: 'odds/teaser',
		required: ['teaserid'],
		devUrl: 'http://www.mocky.io/v2/572800cb120000b40cc05a2d'
	},
	getCurrencies: {
		type: 'get',
		version: 'v2',
		endpoint: 'currencies',
		devUrl: 'http://www.mocky.io/v2/5728019f120000d40cc05a2e'
	},
	getClientBalance: {
		type: 'get',
		version: 'v1',
		endpoint: 'client/balance',
		devUrl: 'http://www.mocky.io/v2/57280237120000e90cc05a2f'
	},
	getLine: {
		version: 'v1',
		endpoint: 'line',
		required: ['sportId', 'leagueid', 'eventid', 'periodNumber', 'betType', 'oddsFormat'],
		devUrl: 'http://www.mocky.io/v2/57280237120000e90cc05a2f'
	},
	getParlayLines: {
		type: 'post',
		version: 'v1',
		endpoint: 'line/parlay',
		required: ['oddsFormat', 'legs'],
		devUrl: 'http://www.mocky.io/v2/57280b01120000cc0dc05a32'
	},
	getTeaserLines: {
		type: 'post',
		version: 'v1',
		endpoint: 'line/teaser',
		required: ['teaserid', 'oddsFormat', 'legs'],
		devUrl: 'http://www.mocky.io/v2/57280b53120000c50dc05a33'
	},
	placeBet: {
		type: 'post',
		version: 'v1',
		endpoint: 'bets/place',
		required: ['uniqueRequestId', 'acceptBetterLine', 'oddsFormat', 'stake', 'winRiskStake', 'sportId', 'eventId', 'periodNumber', 'betType', 'lineId'],
		devUrl: 'http://www.mocky.io/v2/57280d18120000f30dc05a39'
	},
	placeParlayBet: {
		type: 'post',
		version: 'v1',
		endpoint: 'bets/parlay',
		required: ['uniqueRequestId', 'acceptBetterLine', 'oddsFormat', 'riskAmount', 'roundRobinOptions', 'legs'],
		devUrl: 'http://www.mocky.io/v2/57280db5120000040ec05a3a'
	},
	placeTeaserBet: {
		type: 'post',
		version: 'v1',
		endpoint: 'bets/teaser',
		required: ['uniqueRequestId', 'teaserId', 'oddsFormat', 'winRiskStake', 'stake', 'legs'],
		devUrl: 'http://www.mocky.io/v2/57280e72120000300ec05a3d'
	},
	getBets: {
		type: 'get',
		version: 'v1',
		endpoint: 'bets',
		devUrl: 'http://www.mocky.io/v2/572811041200008f0ec05a40'
	},
	getInrunning: {
		type: 'get',
		version: 'v1',
		endpoint: 'inrunning',
		devUrl: 'http://www.mocky.io/v2/5728139b120000cd0ec05a43'
	},
	getTranslations: {
		type: 'get',
		version: 'v1',
		endpoint: 'translations',
		required: ['cultureCodes', 'baseTexts'],
		devUrl: 'http://www.mocky.io/v2/57281276120000b90ec05a42'
	}
};

module.exports = operations;