/* function displayA(){
    console.log("A")
}

function displayB(callback){
    setTimeout(() => {
        console.log("B");
        callback()
},3000)}

function displayC(){
    console.log("C")
}


displayA()
displayB(displayC) */

let likePizza = false;

const pizza = new Promise((resolve, reject)=> {
    if(likePizza)
        resolve('피자주문합니다');
    else
        reject('피자를 주문하지 않습니다');
})


pizza
.then (result => console.log(result))
.catch(err=>console.log(err))
/*
.then (result => console.log(result))
.catch(err => console.log(err)) */

