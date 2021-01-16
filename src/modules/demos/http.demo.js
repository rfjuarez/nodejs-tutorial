const http = require("http");
//https://nodejs.org/dist/latest-v15.x/docs/api/http.html#http_http_createserver_options_requestlistener

const serverHandler = (req, res) => {
    //console.log(req.method);
    const url = req.url;
    res.writeHead(200, {'Content-Type': 'text/html'});
    switch (url) {
        case "/inicio":
            content = "<h1>Bienvenido</h1>";
            break;
        case "/contactos":
            content = "<h1>Contactese con nosotros</h1>";
            break;
        default:
            content = "<h1>Page not found</h1>";
            res.writeHead(404, {'Content-Type': 'text/html'});
    }
    res.write(content);
    res.end();
}
const port = 3000;
const HttpServer = {

    init: () => {
        http.createServer(serverHandler).listen(port, () => {
            console.log(`Listen on port ${port}`)
        });
    }
}
module.exports = HttpServer;