const nums = [1,2,3,4,5,6,7,8,9,0]
const newNums = nums.filter ((val) => val > 4)
console.log(newNums);

// agar curly braces lgake likhte h upar wale code ko hi to return krna pdega
// is tarah :--

const numss = [1,2,3,4,5,6,7,8,9,0]
const newNumss = numss.filter( (val) => {
    return val > 4
})
console.log(newNumss);

//-------------------------------------------------------------------

const books = [
    {title: 'book 1', genre: 'fiction', publsh: 1982},
    {title: 'book 2', genre: 'non fiction', publsh: 1986},
    {title: 'book 3', genre: 'science', publsh: 1985},
    {title: 'book 4', genre: 'history', publsh: 1984},
    {title: 'book 5', genre: 'fiction', publsh: 1983},
];
let userBooks = books.filter((bk) => bk.genre === 'history')
console.log(userBooks);

userBooks = books.filter((bk) => { return bk.publsh >= 1981}) // {} lgaye to return lgana pdega
console.log(userBooks);

/// Map :----------------------------------------------------
const myNums = [1,2,3,2,1,4,7,12, 17,20, 28, 21, 16]
const newNum = myNums.map((num)=>{return num+10})
console.log(newNum);

//--------------using map and filter eksaath
const myNumbers = [1,2,3,2,1,4,7,12, 17,20, 28, 21, 16]
const mergeNum = myNumbers
                 .map((num) => num*10).map((num)=>num+2)
                 .filter((num)=>num >= 60)
console.log(mergeNum);
