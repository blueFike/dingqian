var express = require('express');
var router = express.Router();

var fs = require('fs');

router.get('/',function (req,res) {
    fs.readFile('Items.json','UTF-8',function (err,data) {
        if(err) {
            res.status(404).send('');
        }
       if(data ===''){
           res.status(200).send('');
       }
        res.status(200).json(JSON.parse(data));
    });
});

module.exports = router;