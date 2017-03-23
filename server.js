var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (request, response) {
	var pathname = url.parse(request.url).pathname;
	//var pathname = "/canvas.h5";
	//console.log("Request for " + pathname + " received. type="+response.headers["content-type"] + ", method=" + method + "\n");
	//console.log("Request for " + pathname + " received. method=" + request.method + ", head=" + request.headers);
	
	fs.readFile(pathname.substr(1), function (err, data) {
		if (err) {
			console.log(err);
			response.writeHead(404, {'Content-Type': 'text/html'});
		}else if (pathname  == "/car.png") {
//			console.log("write image");
			response.writeHead(200, {'Content-Type': 'image/png'});	
			response.write(data, "binary");
		} else{	         
			//console.log("write text");
			response.writeHead(200, {'Content-Type': 'text/html'});	
			response.write(data.toString());		
		}

		response.end();
	});   
}).listen(8080);

/*var fs = require('fs');

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	//response.writeHead(200, {'Content-Type': 'text/plain'});

	var myData = fs.readFileSync('canvas.h5');
//	response.end('Hello, World\n');
	response.write(myData.toString());
	response.end();
}).listen(8080);
*/

//console.log(myData.toString());
console.log('Server runing at http://127.0.0.1:8080/');
