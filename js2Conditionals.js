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

//ternary operator ?
let a=8;
let b=9;
let c = a>b ? (a-b):(b-a);
console.log(c)

