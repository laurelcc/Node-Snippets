var fs = require('fs');

var readerStream = fs.createReadStream('buffer.js');
// var writerStream = fs.createWriteStream('output.txt');
// readerStream.setEncoding('utf-8');
// readerStream.on('data', function(chunk){
//   writerStream.write(chunk, 'utf8');
// });
// readerStream.on('end', function(){
//   writerStream.end();
// });

// console.log('reader to writer completed!');

// var pipeStream = fs.createWriteStream('pipe.txt');
// readerStream.pipe(pipeStream);
// console.log('pipe completed!');

// var zlib = require('zlib');
// fs.createReadStream('buffer.js')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('buffer.js.gz'));

// console.log('pipe link stream done!');

// console.log('__filename:', __filename, '__dirname:', __dirname);

// var util = require('util');
// function Person(){
//   this.name = 'name of person';
//   this.toString = function(){
//     return this.name;
//   }
// };

// var obj = new Person();
// console.log(util.inspect(obj));
// console.log(util.inspect(obj, true));





