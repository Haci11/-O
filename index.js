const http = require("http");
const path = require("path");

const l = function (req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("Ip: "+req.socket.remoteAddress+ "<br>" +
    "Server name: "+ path.basename(__filename)+"<br>" +
    "Port: "+ req.socket.remotePort+"<br>"+
    "Method: " +req.method);
}

const server = http.createServer(l);
server.listen(8080);
