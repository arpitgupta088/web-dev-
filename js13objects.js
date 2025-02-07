//singleton => remember agar literals ki tarah declare krte hain to singleton
//nahi banta hai par constructor se banega to singleton bnta hai

// Object Literals
/*we can define keys of our own choice is onjects which is not possible in
array. Also, keys are stored as string */

//symbol declaration:
const mySym = Symbol("keys1")

const user = {
    name: "Arpit",
    "fullname":"arpit Gupta",  // is value ko ham '.' se access ni kr skte ab
    age: 10,
    location: "jaipur",
    email: "abc@gmail.com",
    islogIn: false,
    lastdays: ["monday","tues"],
    [mySym]:"mykeys123"  //symbol ko object me use aise krte hain
}
console.log(user)
console.log(user.email);
console.log(user["email"]);
console.log(user[mySym]);  //symbol ko print aise krte hain
console.log(typeof user.mySym);

//freeze => freeze the value so it cannot be changed
user.email = "arpitg@gm.com"
Object.freeze(user)  //ab user me kch bhi change nhi hoga
user.email = "shshd@hhd.c" // this will not applyi
console.log(user)

