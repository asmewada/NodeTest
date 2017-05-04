var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '160.153.129.36',
  user     : 'indyisuser',
  password : 'Happyindy123',
  database : 'NodeJavaTest'
});

connection.connect();

connection.query('SELECT * from ihopethisworks', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

connection.end();