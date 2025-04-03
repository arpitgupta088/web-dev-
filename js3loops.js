/* <script>
    console.log("I am a tutorial on Loops")
    </script> */

// let a = 1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)

// for (let i = 0; i < 100; i++) { 
//     console.log(a + i); 
// }

// print tables:-
// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value: ${i}`);
//  for (let j = 0; j <= 10; j++) {
//     console.log(i + '*' + j + '=' + i*j);
//  }
// }

//brreak and continue
for (let index = 1; index < 10; index++) {
    const element = index;
    if(element == 5){
        console.log(`detected 5`);
        break;    // stop at 5
    }
    console.log(`value of i is ${element}`);  
}

for (let index = 1; index < 10; index++) {
    const element = index;
    if(element == 5){
        console.log(`detected 5`);
        continue;    // skip 5
    }
    console.log(`value of i is ${element}`);  
}

let obj = {
    name: "Harry",
    role: "Programmer",
    company: "CodeWithHarry AI"
}
//for in
for (const key in obj) {     //agr keys print krni h toh - for in
        console.log(key)
}
// agr value print krni h using for in:
for (const val in obj){
    console.log(`values are : ${obj[val]}`);  
}

// for (const c of "Harry") {  //for of - agr value to break krke print krna
//     console.log(c)
// }
 

// let i = 0;
// while (i<60000) {
//     console.log(i)
//     i++;
// }

let i = 10;
do {
    console.log(i)
    i++;
} while (i<6);

//MAP :-----------------------------------

const map = new Map()
map.set('IN', "India")
map.set('FR', "France")
console.log(map);

for (const keyy of map) {
    console.log(keyy); 
}

for (const [keyy, value] of map) { // objects cannot be accessed using in this way
    console.log(keyy, ':-',value); 
}

