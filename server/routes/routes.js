const express = require('express');
const multer = require('multer');

const router = express.Router();

router.get('/', function (req, res) {
    res.send('Bienvenido  a mi app');
})

router.post('/submit/post', function (req, res) {
    console.log(req.body);
})

module.exports = router;