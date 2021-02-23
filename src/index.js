require('dotenv').config();
const Server = require('./server');
console.log(process.env.PORT);

Server.build.start(process.env.PORT);
