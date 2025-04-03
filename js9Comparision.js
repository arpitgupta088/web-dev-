console.log("2" > 1)  // true

console.log(null>0);  //false  /* null is converted to 0 */ i.e 0>0 false
console.log(null==0);  //false //equality operator == doesnot convert null to 0
console.log(null>=0);  //true  /* null is converted to 0 */
console.log(null<=0);  //true  /* null is converted to 0 */ 0<=0 true

console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);
// o/p => false in all above cases


// ===  => checks strictly the datatype
console.log("2" === 2);  //false
// but 
console.log("2"== 2);  //true

                