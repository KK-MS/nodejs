var http = require('http');

var server = http.createServer(function(req, res) {
res.writeHead(200);
res.write('Hi everybody with electron in package.json.\n');
res.write('Start.script is change to nodemon, now server need not to be restarted.\n');
res.end('But we need electron to be start.script?');
});
server.listen(8080);