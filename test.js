
let fetch = require('fetch')
function getUsers(){
    return new Promise((resolve,reject)=>{
        fetch('https://reqres.in/api/users?page=2')
        .then(function(data){
            console.log(data);
            resolve(data);
        },function(error){
            console.log(error);
            reject(error);
        })
    })
}

function *gen(){
    yield getUsers();
}

let res = gen();
console.log(res.next());

