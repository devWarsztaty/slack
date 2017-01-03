var slackin = require('slackin');

var token = process.env.slack_token || '';
var port = process.env.port || 3000;
var isDev = process.env.NODE_ENV == "development"

slackin.default({
  token: token,
  interval: 1000,
  org: 'devwarsztaty',
  silent: !isDev
}).listen(port)