// js array-copy operations create 
// shallow copies(jo change krege wo original array me bhi hoga i.e share same reference)

const arr = [0,1,2,3,4]
const myHero = ["krrish", "ironman"]

const myArr = new Array(1,2,3,4,5)
console.log(myArr[1]);

console.log(arr[3]);

// array methods
myArr.push(6)
console.log(myArr);
myArr.pop()
console.log(myArr);

myArr.unshift(99);  //add 99 at start
console.log(myArr);

myArr.shift();  //remove from start
console.log(myArr);

console.log(myArr.includes(4));

console.log(myArr.indexOf(66));


const newArr = myArr.join(); //binds the array and converts into string
console.log(myArr);   // [1,2,3,4]
console.log(newArr);  // 1,2,3,4
console.log(typeof newArr);  //string
console.log(typeof myArr);  //obj

//slice , splice
console.log("A", myArr);

const arr2 = myArr.slice(1,3)   // [2,3]
console.log(arr2);  
console.log("B ", myArr);  //original array will not change

const arr3 = myArr.splice(1,3)   //[2,3,4]
console.log(arr3);
console.log("C ",myArr);  //original array will also change and spliced elements
//will get removed i.e. o/p => [1,5] as 2,3,4 are spliced



