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
		required: ['sportid'],
		devUrl: 'http://www.mocky.io/v2/572163860f0000621a387386'
	},
	getFixtures: {
		type: 'get',
		version: 'v1',
		endpoint: 'fixtures',
		required: ['sportid'],
		devUrl: 'http://www.mocky.io/v2/57228c2e1200009c053e7653'
	},
	getFixturesSettled: {
		type: 'get',
		version: 'v1',
		endpoint: 'fixtures/settled',
		required: ['sportid'],
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
		required: ['sportid']
	},
	getParlayOdds: {
		type: 'get',
		version: 'v1',
		endpoint: 'odds/parlay',
		required: ['sportid']
	},
	getTeaserOdds: {
		type: 'get',
		version: 'v1',
		endpoint: 'odds/teaser',
		required: ['teaserid']
	},
	getCurrencies: {
		type: 'get',
		version: 'v2',
		endpoint: 'currencies'
	},
	getClientBalance: {
		type: 'get',
		version: 'v1',
		endpoint: 'client/balance'
	},
	getLine: {
		version: 'v1',
		endpoint: 'line',
		required: ['sportid', 'leagueid', 'eventid', 'periodNumber', 'betType', 'oddsFormat']
	},
	getParlayLines: {
		type: 'post',
		version: 'v1',
		endpoint: 'line/parlay',
		required: ['oddsFormat', 'legs']
	},
	getTeaserLines: {
		type: 'post',
		version: 'v1',
		endpoint: 'line/teaser',
		required: ['teaserid', 'oddsFormat', 'legs']
	}
};

module.exports = operations;