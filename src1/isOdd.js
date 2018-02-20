// isOdd.js
import isEven from './isEven';
console.log('This is in isOdd');
console.log(isEven);
console.log('========');
export default x => ! ((x === 0) || ! isEven(x-1));
