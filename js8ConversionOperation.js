"use strict"; // treats all js code as newer version

let score = "33"; // its a string
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);//change string datatype of score to number
                  // datatype's first letter is capital in conversion

console.log(typeof valueInNumber);  // number
console.log(typeof score)      // string
console.log(valueInNumber);  // 33


//---------
//if we write
let scores = true
let valueInNumbers = Number(scores)
console.log(valueInNumbers);  // o/p = 1; and 0 in case of false
//--------

let sc = "arpit22"
let valueInNum = Number(sc)
console.log(valueInNum);  // NaN b/c string containing alphabets 
// cannot be converted to nmber


//--- can be converted to boolean, string etc in same way

//-------------------------

console.log("1"+"2"); //12
console.log(1 + 2 + "2");  // 32
console.log(1+"2"); //12
console.log("1"+2); //12


