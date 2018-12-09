const fs = require('fs');

console.log('view current folder:');
fs.readdir('.', function(err, files){
  if(err){
    return console.error(err);
  }

  files.forEach(function(file, i){
    console.log(i, file);
  });

  fs.unlink('output.txt', function(err){
    if(err){
      console.error(err);
    }
    console.log('remove file success!');
  })
})



