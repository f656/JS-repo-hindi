//DATES.......................................
let mydate =new Date()
// console.log(mydate)
// console.log(mydate.toString());
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);

// let mycreatedDate = new Date(2024,0,24) 
// let mycreatedDate = new Date(2024,5,24,5,3)
// let mycreatedDate = new Date("2024-01-23")
let mycreatedDate = new Date("07-22-2024")
// console.log(mycreatedDate.toLocaleString());

let myTimeStamps = Date.now();
// console.log(myTimeStamps);
// console.log(mycreatedDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000)); 

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})