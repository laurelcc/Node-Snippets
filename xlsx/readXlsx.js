var xl = require('node-xlrd');
var paths = require('path');

var path = paths.resolve('./xlsx/amazon.cn.xls');
xl.open(path, function (err, bk) {
  if (err) {
    console.log('error', err.name, err.message);
    return;
  }

  var sCount = bk.sheet.count;
  for (var sIdx = 0; sIdx < sCount; sIdx++) {
    console.log('sheet "%d"', sIdx);
    console.log('check sheet "%d" loaded', bk.sheet.loaded(sIdx));
    var sheet = bk.sheets[sIdx];
    var rowCount = sheet.row.count;
    var columnCount = sheet.column.count;
    console.log('name = %s, index = %d, row = %d, column = %d', sheet.name, sIdx, rowCount, columnCount);

    for (let rIdx = 0; rIdx < rowCount && rIdx < 10; rIdx++) {
      var data = [];
      for (var cIdx = 0; cIdx < columnCount; cIdx++) {
        try {
          data[cIdx] = sheet.cell(rIdx, cIdx);
          console.log('row: %d, column: %d, value: %s', rIdx, cIdx, data[cIdx]);
        } catch (e) {
          console.log('error: %s', e.message);
        }
      }
      console.log('data: ', data);
    }
  }
})