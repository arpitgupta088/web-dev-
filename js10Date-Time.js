let myDate = new Date()
console.log(myDate);  //unreadable o/p
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);  //object

let myCreatedDate = new Date(2024, 0, 23, 5, 3) //y,m,d,hr.min
console.log(myCreatedDate.toLocaleString());

let myTime = Date.now(); // returns millisecs
console.log(myTime);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));  //converts into seconds


