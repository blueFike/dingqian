var express = require('express');  //引入express模块
var app = express();   //创建一个app

var fs = require('fs');

var bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '1mb'}));  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
  extended: true
}));

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
/*
var ID = 0;
fs.readFile('Items.json', 'UTF-8', function (err, data) {
        var leng = data.length-1;
        ID =JSON.params.data[leng].id;
});
*/
var getAllItems = require('./routes/getAllItems'); //引入路由getAllItems
var getOneItem = require('./routes/getOneItem');
var deleteItems = require('./routes/deleteItems');
var updataItems = require('./routes/updataItems');
var insertItems = require('./routes/insertItems');

app.use('/',getAllItems);
app.use('/',getOneItem);
app.use('/',deleteItems);
app.use('/',updataItems);
app.use('/',insertItems);

app.listen(3000,function () {
    console.log('server start...');
});
