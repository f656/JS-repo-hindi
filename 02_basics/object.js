//Singleton
// object.create

// Object literal

const mysym = Symbol("key1")

const jsUser = {
    name:"Faizan",
    fullname:"Faizan Ali",
    [mysym]:"mykey1",
    age:"24",
    location:"Pratapgarh",
    email:"FaizanAli@google.com",
    isLogedIn:false,
    lastLoginDays:["monday","tuesday"]

   }
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["fullname"]);
// console.log(jsUser[mysym]);

jsUser.email = "faizan@chatgpt.com"
// Object.freeze(JsUser)
jsUser.email = "faizan@microsoft.com"
// console.log(JsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());