var express = require('express');
var router = express.Router();

var fs = require('fs');

fs.stat('Items.json',function (err,stat) {
    if((stat && stat.isFile())){
       console.log();
    }
    else{
        fs.open('Items.json','a+',function (err,fd){
            if(err){
                console.log('创建失败');
            }
        });
    }
});

module.exports = router;
