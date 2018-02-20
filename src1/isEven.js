// isEven.js
import isOdd from './isOdd';
console.log('This is in isEven');
console.log(isOdd);
console.log('========');
export default x => (x === 0) || isOdd(x-1);
