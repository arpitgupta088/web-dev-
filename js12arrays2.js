const marvel_hero = ['ironman',"thor"]
const dc_hero = ["superman", "flash"]
marvel_hero.push(dc_hero)  //takes dc_hero as a single element
console.log(marvel_hero);

//for concat
const allHero = marvel_hero.concat(dc_hero)
console.log(allHero);

//spread operator
const newheroes_2 = [...marvel_hero, ...dc_hero]  //works same as concat
console.log(newheroes_2);

// flat
const depth_arr = [1,2,3,[4,6,7],8,[8,9,[3,0]]]
const flat_arr = depth_arr.flat(1)  //1 is the depth upto which array should be flattend
console.log(flat_arr);

// isArray 
console.log(Array.isArray("arpit"));
// from -> to convert into array
console.log(Array.from("arpit"));

console.log(Array.from({name: "arpit"})); //interesting case for interviews
// this returns an empty string b/c kisko array banana h key ko ya value ko

//of => returns value
let score =66
let score2 = 44
console.log(Array.of(score,score2));

