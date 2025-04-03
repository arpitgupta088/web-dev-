const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();   // ab resolve connect hua h then se
    }, 1000)
})
// ab promise create ho gya to usey consume krna h
//ham chahte h ki promise fullfill hone k baad kuch kaam ho to then use krte hai
promiseOne.then(function(){
    console.log("Promise consumed");
})

//--------------------or---------without storing in a variable--
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async ask 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

//------------------------
const PromiseThree= new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Btech", email: "btechcse@ex.com"})
    }, 1000)
})

PromiseThree.then(function(user){ //resolve k andar jo data pass kroge
    console.log(user);            //wo yaha mil jata h (jaha user likha h)
       
})

//-------------------------------

const PromiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "Arpit", pass: "123"})
        } else{
            reject('error: something is wrong')
        }
    },1000)
})
PromiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((myusername) => {
    console.log(myusername);
}).catch(function(error){  //ham chahte h ki promise reject hone k baad kuch kaam ho to catch use krte hai
    console.log(error); 
}).finally(function(){
    console.log("promise resolved or rejected");
})

///-------------------------------------

const PromiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Javascript", pass: "123"})
        } else{
            reject('error: js went wrong')
        }
    }, 1000)
})
// .then ki tarah hi async await thodi der wait krta h kam ke hone ka..agr hojata h to thik wrna wahi error dedeta h
async function consumePromiseFive() {
    try{
        const response = await PromiseFive
        console.log(response);
    } catch (error){
        console.log(error);
    }
}
consumePromiseFive()

//--------------------------------------------------------

function savetoDb(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("success: data was saved");
        } else {
            reject("failure: weak connection");
        }
    });
}

let request = savetoDb("arpit gupta");
request.then(()=>{
    console.log("promise was resolved");
})
.catch(()=>{
    console.log("promise was rejected");
})
