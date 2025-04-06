let start = new Date().getMilliseconds();
console.log('start: ' + start);
//calculation timed below⬇️
console.log('result: ' + Math.sqrt(Math.random()));

let end =new Date().getMilliseconds();
console.log('end: ' + end);
console.log('time: ' + (end - start));
