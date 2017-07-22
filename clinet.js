var http = require('http'),
options = {
hostname: 'localhost',
port: '8080',
path: '/index.html'
};
function handlerResponse(response) {
var serverData = '';
response.on('data', function(chunk) {
serverData += chunk;
});
response.on('end', function() {
console.log(serverData);
});
}
http.request(options, function(response) {
handlerResponse(response);
}).end();