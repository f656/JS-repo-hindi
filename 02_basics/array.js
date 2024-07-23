// Array

const myarr = [1,2,3,4,5]
const heros = ["Ironman","Batman"]
const myarr2 = new Array(1,2,3,4,5,6)

// console.log(myarr[1]);
// Array method ..
// myarr.push(6,7)
// myarr.push(8)
// myarr.pop()
// myarr.unshift(9)
// myarr.shift()
// console.log(myarr.includes(9));
// console.log(myarr.indexOf(9));

const newArray = myarr.join()
// console.log(myarr);
// console.log(newArray);
// console.log( typeof newArray);

//Slice And Splice..

console.log('A',myarr);
const myn1 = myarr.slice(1,3)
console.log(myn1);

console.log('B',myarr);
const myn2 = myarr.splice(1,3)
console.log("C",myarr);
console.log(myn2)



