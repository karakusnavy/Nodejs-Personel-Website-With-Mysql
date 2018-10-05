var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express();
var path = require('path');

var yonlendirici=require('../yonlendirici');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.set('View Engine','ejs');
app.set('Views',path.join(__dirname,'/views/'));

app.use('/public',express.static(path.join(__dirname,'../public')));

app.use('/',yonlendirici);
app.use('/blog',yonlendirici);
app.use('/login',yonlendirici); //
app.use('/panel',yonlendirici);


app.listen(3000);