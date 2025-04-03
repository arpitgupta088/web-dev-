function sayMyName() {
    console.log("h");
    console.log("e");
    console.log("i");
    console.log("s");
    console.log("n");
    console.log("b");
    console.log("r");
    console.log("g");
}
sayMyName()
//-------------------------------------
/*
function addTwoNums(num1,num2){  //here these are called parameters
console.log(num1+num2);
}
addTwoNums(3,5)  // 8            //here these i.e.3,5 are called arguments
addTwoNums(3,"5")  // 35

const result = addTwoNums(3,5) // this will also give o/p = 8, but
// if we print value of result then we get undefined
console.log("res", result);
*/

function addTwoNumss(num1, num2) {
    let result = num1 + num2
    console.log(result);
    return result;
    //  console.log("arpit") // kabhi print nhi hoga
}
const result = addTwoNumss(4, 5)
console.log("rsult is", result);

// --------------------------------------

function loginUser(username) {
    return `${username} just logged in`
}
loginUser("huehue")
//ye kuch bhi print nhi krega kyoki hamne usey print krne ko ya kisi 
//variable me store krne ko nhi bola

// ham likh denge-> console.log(loginUser("huehue")) to ab print hogi

// what? agar koi argument hi pas na kiya jaye
console.log(loginUser()); // will give undefined

console.log("_____________________________________________");

function loginUserMess(username) {
    if (username === undefined) {  // also can use-> if(!username){ }
        console.log("pleasee enter name");
        return;    // will end here
    }
    return `${username} just logged in`  // and this will not execute
}
console.log(loginUserMess());

// ----------------------------------------

// rest operator ... ->
function calcCartPrice(...num1) {
    return num1
}
console.log(calcCartPrice(244, 700, 500)); //return an array of all arguments

function calcPrice(val1, val2, ...nums) {  //returns all arguments except 22,44
    return nums
}
console.log(calcPrice(22, 44, 55, 6, 77));

//----------------------------------------------------------------------
//handle object in function
const user = {
    username: "arpit",
    price: 34
}
function handleobject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobject(user)

//handle array:-
const newArray = [233,55,677,88]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(newArray));
// or
console.log(returnSecondValue([200,55,677,88]));
