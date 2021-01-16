const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')

app.use(morgan('combined'))
app.use('/inicio',require("./services/inicio"));
app.use('/contactos', require("./services/contactos"));
app.get('*',(req, res, next)=>{
    res.send('Page Not Found',404);
    next();
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
