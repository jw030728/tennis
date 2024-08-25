let http = require('http');
let url = require('url');

function start() {
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;
        route(pathname);

        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('Hellow node.js');
        response.end();
    }

    http.createServer(onRequest).listen(8888);

}

exports.start = start;