# pinnacle-sports-api

This module is for retrieving data from the Pinnacle Sports API.  See www.pinnaclesports.com/en/api/manual for the API's manual.

Please note that you must have a funded account at www.pinnaclesports.com for this module to work.  You must also call the API from an IP address allowed by Pinnacle Sports.  Because online sports gambling is not allowed in the USA, you may not call the API from a USA IP address.

## Installation
`npm install pinnacle-sports-api --save`

## Examples

#### Require and Initialize the Module
```
var pinnacleAPI = require('pinnacle-sports-api');
var pinnacle = new pinnacleAPI('<your-username>', '<your-password>');
```

#### Optionally Set to a Development Environment
If you would like mock data instead of real, live data from the API (for example, if you have a USA IP address on your local machine and cannot access the live API), you can set the module to a development environment.  It will only call mock URLs and return mock data when this is set.
````
pinnacle.setEnvironmentDev();
````

#### Get Sports
````
pinnacle.getSports(function(err, response, body) {
  if (err) throw new Error(err);
  console.log(body);
});
````

#### Get Leagues
````
var options = {sportId: 3};
pinnacle.getLeagues(options, function(err, response, body) {
  if (err) throw new Error(err);
  console.log(body);
});
````

#### Get Fixtures
````
var options = {sportId: 3};
pinnacle.getFixtures(options, function(err, response, body) {
  if (err) throw new Error(err);
  console.log(body);
});
````

#### Get Settled Fixtures
````
var options = {sportId: 3};
pinnacle.getSettledFixtures(options, function(err, response, body) {
  if (err) throw new Error(err);
  console.log(body);
});
````

#### Get Teaser Groups
````
var options = {oddsFormat: 'AMERICAN'};
pinnacle.getTeaserGroups(options, function(err, response, body) {
  if (err) throw new Error(err);
  console.log(body);
});
````

#### Get Odds
````
var options = {sportId: 3};
pinnacle.getOdds(options, function(err, response, body) {
  if (err) throw new Error(err);
  console.log(body);
});
````

#### Get Currencies
````
pinnacle.getCurrencies(function(err, response, body) {
  if (err) throw new Error(err);
  console.log(body);
});
````
