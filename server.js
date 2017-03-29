var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (request, response) {
	var pathname = url.parse(request.url).pathname;
	//console.log("Request for " + pathname + " received. method=" + request.method);

	if (pathname == "/")
		pathname = "/index.h5";
	
	if (request.method == "GET")
	{
		fs.readFile(pathname.substr(1), function (err, data) {
			if (err) {
				console.log(err);
				response.writeHead(404, {'Content-Type': 'text/html'});
			}else if (pathname.substr(pathname.length-4) == ".png") {
				response.writeHead(200, {'Content-Type': 'image/png'});	
				response.write(data, "binary");
			} else{	         
				response.writeHead(200, {'Content-Type': 'text/html'});	
				response.write(data.toString());		
			}
	
			response.end();
		});   
	}
}).listen(8080);

console.log('Server runing at http://127.0.0.1:8080/');
