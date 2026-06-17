const marvel_heros = ["thor", "ironman", "spiderman" ]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);   

marvel_heros.concat(dc_heros)
console.log(marvel_heros);


var isEven = (element) => {
  //   if (element % 2 === 0) {
  //     return true;
  //   }
  //   return false;

  return element % 2 === 0;
};

// console.log(isEven(2));

// var result = [2, 3, 6, 8].every(isEven);
// console.log(result);

var result = [2, 3, 6, 8].every((e) => (e % 2 === 0));
console.log(result); 


const another_array = [1,3,4 [5,6,7],6,[6,7[4,5]]]

const real_another_array = another_array.flat(infinity)
console.log(real_Another_array)


console.log(ArrayBuffer.isArray("MOMO"))
console.log(ArrayBuffer.from("MOMO"))
console.log(ArrayBuffer.from({name: "MOMO"}))

let score1 = 100
let score3 = 300
let score4 = 400

console.log(Array.of(score1, score3, score4));