const express = require('express')
const morgan = require('morgan')
const cors = require('cors')


class Server{
    constructor() {
        this.app = express();
        this.middleware();
        this.routes();
    }
    middleware(){
        this.app.use(morgan('combined'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }
    routes(){
        this.app.use('/api/user',require("./routes/user.routes"));
        this.app.get('*',(req, res, next)=>{
            res.status(404).json({"msg":"Not found"});
            next();
        });
    }
    start(port){
        this.app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`)
        })
    }
    static get build(){
        return new Server();
    }
}
module.exports = Server;





