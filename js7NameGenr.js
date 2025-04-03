let rand = Math.random()
console.log(rand)

let first, second, third

if(rand<0.33){
    first = "crazy"
}
else if(rand<0.66 && rand>=0.33){
    first = "amazing"
}
else{
    first="fire"
}

//generate second word
rand = Math.random()
console.log(rand) 

if(rand<0.33){
    second = "engine"
}
else if(rand<0.66 && rand>=0.33){
    second = "foods"
}
else{
    second="garments"
}

//third number
rand=Math.random()
console.log(rand)
if(rand<0.33){
    third = "bros"
}
else if(rand<0.66 && rand>=0.33){
    third = "limited"
}
else{
    third="hub"
}

console.log(`${first} ${second} ${third}`)