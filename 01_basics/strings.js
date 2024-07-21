let name = "Faizan";
let repocount = 50;

// console.log(name + repocount + "value");

console.log(`my name is ${name} and repo count is ${repocount}`);

const gameName = new String("Faizan-fc")

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const str = "    ali     "
console.log(str);
console.log(str.trim())

const url = "http://faizan.com/faizan%20ali"
console.log(url.replace('%20','@'));

console.log(url.includes('faizan'));

console.log(gameName.split('-'));