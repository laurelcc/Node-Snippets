// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: '123456',
//   database: 'ftime'
// });

// connection.connect();

// connection.query('select * from member', function(err, results, fields){
//   if (err) throw err;

//   var fieldNames = fields.map(t => t.name);
//   console.log('The solution is: ', fieldNames);
// });

// connection.on('connect', function(err){
//   console.log('query end.');
// });