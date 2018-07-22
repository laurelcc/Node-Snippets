const fs = require('fs');
const path = require('path')

var rootPath = process.argv[2];
if (!rootPath) {
  return Promise.reject('Please define the root folder!');
}

rootPath = path.resolve(rootPath);
// renameRecursive(rootPath, /-素材派/, '');
nameAppend(rootPath, '-素材派');

/**
 * 递归去掉关键词
 * @param {*} contextPath 
 * @param {*} pattern 
 * @param {*} replaceStr 
 */
function renameRecursive(contextPath, pattern, replaceStr){
  const files = fs.readdirSync(contextPath);
  files.forEach(function (file, i){
    const stat = fs.statSync(path.resolve(contextPath, file));
    if (stat.isDirectory()){
      const recursivePath = path.resolve(contextPath, file);
      renameRecursive(recursivePath, pattern, replaceStr);
    }

    if (stat.isFile() && pattern.test(file)) {
      const op = path.resolve(contextPath, file);
      const np = path.resolve(contextPath, file.replace(pattern, replaceStr));
      fs.renameSync(op, np);
    }
  });
}

/**
 * 名称后面追加文字
 * @param {*} contextPath 
 * @param {*} appendStr 
 */
function nameAppend(contextPath, appendStr){
  const files = fs.readdirSync(contextPath);
  files.forEach(function (file, i){
    const stat = fs.statSync(path.resolve(contextPath, file));
    if (stat.isDirectory()){
      const recursivePath = path.resolve(contextPath, file);
      nameAppend(recursivePath, appendStr);
    }

    if (stat.isFile() && file.indexOf('.js') < 0) {
      const op = path.resolve(contextPath, file);
      
      const dot = file.lastIndexOf('.');
      const nfn = file.substring(0, dot) + appendStr + file.substring(dot, file.length);

      const np = path.resolve(contextPath, nfn);
      fs.renameSync(op, np);
    }
  });
}

