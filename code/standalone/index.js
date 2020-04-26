var http = require('http');

var server = http.createServer(function(req, res) {
res.writeHead(200);
res.end('Hi everybody with node .!');
});
server.listen(8080);