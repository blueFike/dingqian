var express = require('express');
var router = express.Router();

var fs = require('fs');

router.delete('/items/:id', function (req, res) {
    fs.readFile('./Items.json', 'UTF-8', function (err, data) {
        var isContained = false;
        var data = JSON.parse(data);
        for (var i = 0; i < data.length; i++) {
            if (data[i].id === parseInt(req.params.id)) {
                data.splice(i,1);
                isContained = true;
            }
        }

        fs.writeFile('./Items.json', JSON.stringify(data), function (err, data) {
            if (isContained === false) {
                res.status(404).send("");
            } else {
               res.status(204).send("");
           }
        });
    });
});

module.exports = router;