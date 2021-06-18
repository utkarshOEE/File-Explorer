const http = require('http');

const respond = require('./lib/respond.js');

const port = process.env.PORT || 3000;
const server = http.createServer(respond);

server.listen(port, () => {
    console.log(`listening on port: ${port}`);
});
