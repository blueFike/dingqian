var express = require('express');
var router = express.Router();

var fs = require('fs');

router.get('/items/:id', function (req, res) {
    fs.readFile('./Items.json', 'UTF-8', function (err, data) {
        if (err) {
            res.status(404).send('');
        }
        if (data === '') {
            res.status(200).send('');
        }
        data = JSON.parse(data);
        for (var i = 0; i < data.length; i++) {
            if (data[i].id.toString() === req.params.id) {
                res.status(200).json(data[i]);
            }
            else {
                res.status(404).send('');
            }
        }
    });
});

module.exports = router;