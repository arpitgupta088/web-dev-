const instauser = {}
// or
//  const instauser = new Object()

instauser.id="123abs"
instauser.name="arpit"
instauser.isloggedin = false

console.log(instauser);

//nested objects
const regularUser = {
    email: "random@gmail.com",
    fullName: {
        userfullnme: {
            firstname: "arpitt",
            lastname: "gupta"
        }
    }
}
console.log(regularUser.fullName.userfullnme.firstname);

//assigning objects in single object:
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

const obj4 = {obj1, obj2}
console.log(obj4);


const obj5 = Object.assign({},obj1,obj2,obj3) //assign all objs in {}
console.log(obj5);

const obj6 = Object.assign(obj1,obj2,obj3) //assign all objs in obj1
console.log(obj6)

//we will use spread ... operator 
const obj7 = {obj1,obj2,...obj3} //obj3 values are merged into obj7
const obj8 = {...obj1, ...obj2,...obj3} // all are merged in obj8
console.log(obj7);
console.log(obj8);

//object ki keys ya values ko leke unhe array bana skte hain by using:-
console.log(Object.keys(instauser))
console.log(Object.values(instauser))

