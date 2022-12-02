var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
const dayOne = require('./days/dayOne/solution');
const dayTwo = require('./days/dayTwo/solution');

app.get('/', function(req, res){
    res.render('index.ejs');
});

app.get('*', function(req, res){
    res.send('Sorry... page not found');
});

app.listen(3000, function(){
    console.log('Starting app on port 3000...');

    // dayOne.partOne();
    // dayOne.partTwo();
    dayTwo.partOne();
    dayTwo.partTwo();
});