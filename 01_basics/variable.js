const accountId = 1233444;
let accountemail = "faizan@123gmil.com";
var accountpassword = "53727";
accountcity = "jaipur";

//accountId  = 3 // Not Allowed

accountemail = "ali@123gmail.com";
accountpassword = "21231";
accountcity = "Mumbai";
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountemail,accountpassword,accountcity]);