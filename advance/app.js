// async awaiit >> promise chains >> callback hell


//sync
console.log("one");
console.log("two");
console.log("three");

//async
console.log("Check 1");
setTimeout(() => {
    console.log("check timeout");
}, 1000);
console.log("Check 2");

//Callback
function sum(a, b) {
    console.log(a+b);
}

function calculator(a, b, sumCallback){
    sumCallback(a, b);
}
calculator(1,2, sum);

//nesting
for(let i=0; i<5; i++){
    let str = "";
    for(let j=0; j<5; j++){
        str = str + j;
    }
    console.log(i, str);
}

//callback hell
function getData(dataId, getNextData){
    setTimeout(() => {
        console.log("Data ", dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}

getData(1, () => {
    getData(2, () => {
        getData(3);
    });
});


//Promises (Solution of a Callback Hell)
function getDataPromise(dataId){
    return new Promise((resolve, reject) => {
        console.log("Data ", dataId);
        resolve();
    });
}