const user = {
    username:"Arpit",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage(); //pehle ye print hoga aur iska current context print krega this. 
user.username="sam";  // fir yaha naam change hoga
user.welcomeMessage();  // aur fir this iska current context print krega

//it will not work for function. e.g.
function chai(){  // or we can also define func like:- const chai = function(){
    let username = "abshdh"
    console.log(this.username);
}
chai();  // o/p undefined

// for arrow function---------------- ()=>{}

const chai2 = () => {
    let username = 'arpit'
    console.log(this.username)  
}
chai2()  //also give undefined

// ------------------
const addTwo = (num1, num2) => {
    return num1+num2
}
//or
// const addTwo = (num1,num2) => (num1+num2)  //implicit return

console.log(addTwo(3,4));

//similarly, to return object, () is required 

