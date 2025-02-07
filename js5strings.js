console.log("This is strings tutorial")
let a = "Harry";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);

console.log(a.length)

let real_name = "Harry"
let friend = "Rohan"
console.log("His name is " + real_name + " and his friends name is " + friend)
console.log(`His name is ${real_name} and his friends name is ${friend}`)

const b = new String("ShivamSh")
console.log(b.toUpperCase())
console.log(b.toLowerCase()) 
console.log(b.length) 
console.log(b.slice(1, 5)) 
console.log(b.slice(1)) 
console.log(b.charAt(2));
console.log(b.indexOf('m'));
console.log(b.includes('ms'))  //false b/c ms is not in string

console.log(b.replace("Sh", "77"))
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))
console.log(b)

const newName = b.substring(0,4)
console.log(newName);

let newSt = "    gdh  db  "
console.log(newSt.trim())  //removes starting and endng spaces

const x = new String('asdfg23g-@ch,vj')
console.log(x.split('-'));
