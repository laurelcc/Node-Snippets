// // const Buffer = require('buffer');

// const buf = Buffer.from('runoob', 'ascii');
// console.log(buf.toString('hex'));
// console.log(buf.toString('base64'));

// const buf1 = Buffer.alloc(10);
// console.log('buf1: ', buf1);

// const buf2 = Buffer.allocUnsafe(10);
// const buf3 = Buffer.allocUnsafeSlow(10);
// console.log('buf2:', buf2, 'buf3:', buf3);

// console.log(Buffer.from('hello'))

// const buf4 = Buffer.alloc(40);
// console.log('buf4:', buf4);

// buf4.write('hello', 10, 20);
// console.log('buf4:', buf4);

const buffer1 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buffer1);
console.log(json);

const copy = JSON.parse(json, (key, value) => {
  return value && value.type === 'Buffer' ?
    Buffer.from(value.data) :
    value;
});
console.log('copy:', copy,);

