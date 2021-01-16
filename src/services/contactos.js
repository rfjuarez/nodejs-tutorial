const express = require('express')
const router = express.Router()
router.get('/', (req, res) => {
    console.log(req.query["email"]);

    res.send('contactese')
});
module.exports = router