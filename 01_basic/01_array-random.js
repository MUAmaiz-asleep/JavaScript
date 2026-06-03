// arrayss

const myArr = [1, 3, 4, 5, 6, 7, 8]
const myHeros = ["spidy", "momobot"]

const myArr3 = new Array(1, 3, 4, 5)
// console.log(myArr[1]); // no. in square brackets indicate position

// Methods in array

// myArr.push(6)
// myArr.push(7)
// myArr.pop(4)

// myArr.unshift(6)
// myArr.shift(1)

// console.log(myArr.includes(9));
// console.log(myArr.indexof(9));

const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);



// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.timeLog(myn1);
console.log("B", myArr);


const myn3 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn3);