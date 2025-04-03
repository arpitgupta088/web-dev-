console.log('hello this is conditional tutorial')

let age = 5
let grace=2

//arithmetic operators
console.log(age+grace)
console.log(age*grace)
console.log(age**grace)
console.log(age/grace)
console.log(age%grace)

//assignment oper.
console.log(age += grace)
// same with -=,*=,/=,!=,<=,>=,?
console.log(age === grace) // it compares values on basic of there type

if((age-grace)<18){
    console.log("you can drive")
}
else if((age-grace )== 0){
console.log("you have your choice")

}
else{
    console.log("you cannot drive")
}
//----------------------------------
const userEmail = ""
if(userEmail){
    console.log("got it");
} else{
    console.log("not have");
}    // o/p - not have , kyoki empty string ko false assume krte h to else chlega
// par agr "" ki jagah [] hota mtlb empty array hota to usey true assume krta to got it ata o/p

// falsey values ----->>>>>>>
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values ------>>>>>
// "0", 'false', " ", [], {}, function()

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

//-----------------------------------

//ternary operator ?
let a=8;
let b=9;
let c = a>b ? (a-b):(b-a);
console.log(c)

//---------------------------------------

//nullish coalescing operator ?? 
let val1;
val1 = 5 ?? 10   // 5
val1 = null ?? 10   //10
console.log(val1);


/// switch case statement:-
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3
switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        // break;   agr break hatado to uske aage ka code bhi execute ho 
        // jata h except default
    case 4:
        console.log("apr");
        break;
    default:
        console.log("nothng");
        break;
}

// for each:---------------------------

const coding =["js","ruby","java","py"]

coding.forEach(function (value){
    console.log(value);
    
});
// also we can write
coding.forEach((item) => {
    console.log(item);
});
// also

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)