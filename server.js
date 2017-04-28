var express    =    require('express');
var app        =    express();

require('./router/main')(app);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use('/', express.static(__dirname)); // redirecting root to main folder
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

var server     =    app.listen(3000,function(){
console.log("Express is running on port 3000");
});