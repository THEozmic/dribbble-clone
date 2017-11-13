'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Set up the express app
var app = (0, _express2.default)();

app.use((0, _compression2.default)());

// Log requests to the console.
app.use((0, _morgan2.default)('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

// Setup a default catch-all route that
// sends back a welcome message in JSON format.
app.get('/', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, '../client/index.html'));
});

app.get('/dist/*', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, '../' + req.originalUrl));
});

var port = parseInt(process.env.PORT, 10) || 5000;
app.set('port', port);

var server = _http2.default.createServer(app);
server.listen(port);
//# sourceMappingURL=app.js.map