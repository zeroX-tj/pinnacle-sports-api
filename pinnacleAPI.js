'use strict';

var _ = require('lodash');
var request = require('request');
var qs = require('qs');
var operations = require('./pinnacleOperations');
var uuid = require("node-uuid");

var PinnacleAPI = function(username, password, postProxy) {
    if(!username || !password){
        throw new Error('No username and/or password provided in createClient().');
    }

    var auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');

    var buildUrl = (function(operation) {
        if (this.environment === 'development') {
            return operations[operation].devUrl;
        }
        else {
            return 'https://api.pinnacle.com/' + operations[operation].version + '/' + operations[operation].endpoint;
        }
    }).bind(this);

    var checkRequired = (function(options, operation) {
        var required = operations[operation].required;
        if (required) {
            required.forEach((function(key) {
                if (_.isUndefined(options[key])) {
                    throw new Error('The ' + operation + ' operation requires the following request data: {' + required.join(', ') + '}.');
                }
            }).bind(this));
        }
    }).bind(this);

    var get = (function(options, operation, cb, filterField) {
    	var url = buildUrl(operation);
        var requestOptions = {
            url: url + '?' + qs.stringify(options),
            rejectUnauthorized: false,
            headers: {
                'Authorization': auth
            }
        };
        request.get(requestOptions, (function (err, response, body) {
            if (err) return cb(err);
            if (!body || _.isEmpty(JSON.parse(body))) return cb(null, '');
            parse(body, function(err, parsed) {
                if (err) return cb(err);
                if (filterField && parsed[filterField]) {
                	cb(null, response, parsed[filterField]);
				} else {
                	cb(null, response, parsed);
                }
            });
        }).bind(this));
    }).bind(this);

    var post = (function(options, operation, cb, filterField) {
        var url = buildUrl(operation);
        if (options && options.uniqueRequestId == undefined) {
            options.uniqueRequestId = uuid.v4();
        }

        var requestOptions = {
            url: url,
            json: options,
            proxy: postProxy,
            rejectUnauthorized: false,
            headers: {
                'Authorization': auth
            }
        };
        request.post(requestOptions, (function (err, response, body) {
            if (err) return cb(err);
            if (!body) return cb(null, '');
            cb(null, response, body);
        }).bind(this));
    }).bind(this);

    var parse = function(body, cb) {
		var result;
		var error;

        try {
            result = JSON.parse(body);
        }
        catch(e){
            error = e + ', Data: ' + body
        }

        cb(error, result);
    }

    this.setEnvironmentDev = function(){
        this.environment = 'development';
    }

    this.getSports = function(cb) {
        var options = {};
        var operation = "getSports";
        get(options, operation, cb, "leagues");
    }

    this.getLeagues = function(options, cb) {
        var operation = "getLeagues";
        checkRequired(options, operation, cb);
        get(options, operation, cb, "leagues");
    }

    this.getFixtures = function(options, cb) {
        var operation = "getFixtures";
        checkRequired(options, operation, cb);
        get(options, operation, cb, "fixtures");
    }

    this.getSpecialFixtures = function(options, cb) {
    	var operation = "getSpecialFixtures";
        checkRequired(options, operation, cb);
        get(options, operation, cb, "specialFixtures");
    }

    this.getSettledFixtures = function(options, cb) {
        var operation = "getSettledFixtures";
        checkRequired(options, operation, cb);
        get(options, operation, cb);
    }

    this.getTeaserGroups = function(options, cb) {
        var operation = "getTeaserGroups";
        checkRequired(options, "getTeaserGroups", cb);
        get(options, "getTeaserGroups", cb);
    }

    this.getOdds = function(options, cb) {
        var operation = "getOdds";
        checkRequired(options, operation, cb);
        get(options, operation, cb);
    }

    this.getSpecialOdds = function(options, cb) {
        var operation = "getSpecialOdds";
        checkRequired(options, operation, cb);
        get(options, operation, cb);
    }

    this.getCurrencies = function(options, cb) {
        var operation = "getCurrencies";
        checkRequired(options, operation, cb);
        get(options, operation, cb, "currencies");
    }

    this.getClientBalance = function(options, cb) {
        var operation = "getClientBalance";
        checkRequired(options, operation, cb);
        get(options, operation, cb);
    }

    this.getSettled = function(options, cb) {
        var operation = "getSettledFixtures";
        checkRequired(options, operation, cb);
        get(options, operation, cb);
    }

    this.placeBet = function(options, cb){
        var operation = "placeBet";
        checkRequired(options, operation, cb);
        post(options, operation, cb);
    }

    this.getLine = function(options, cb){
        var operation = "getLine";
        checkRequired(options, operation, cb);
        get(options, operation, cb);
    }
}

module.exports = PinnacleAPI;