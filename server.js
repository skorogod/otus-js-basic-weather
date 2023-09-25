let static = require('node-static');
let file = new static.Server('./public');
let port = 8080
 
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(port, function() {
    console.log("Node-Static runs on port: http://127.0.0.1:" +port);
});