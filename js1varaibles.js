console.log("variables,data types and onjects")

//  var a = 3    // a = a+1 is allowed
// var b = 6;
// var c = "harry";

// we will use let instead of var. we can also use var but in modern javascript
 // we will use let further 


let a = 3    // a = a+1 is allowed
let b = 6;
let c = "harry";


// console.log(a + b)
// console.log(typeof a)

const a1 = 9  // we cannot change the value of a1 now
// i.e. a1=a1+1 is not allowed
// var has a global scope but different scopes are defind for let

{
    let a = 66;
    console.log(a)
}
console.log(a)

//datatypes
let x = "arpit Bhai"  //string
let y =22;     //number
let z = 3.55   //number
const p = true;   //boolean
let q = undefined;  //undefined
let r = null;      //object

console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r )
//-------------------------------------------

let o ={
    name:"harry",
    "job code":200
}

console.log(o)
o.salary = "100crores"  //will add the salary in o
o.salary = "500crores"  //will update the salary in o

