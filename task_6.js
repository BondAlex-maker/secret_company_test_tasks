function results(cb1, cb2) {
    cb1();
    cb2();
}

function a(a, b) {
    return a+b ;
}

function b() {
    return false;
}
function parallel(arr, callback) {
    let result1 = arr[0];
    let result2 = arr[1]();
    let finalResult = [result1 ,result2]
    return finalResult;
}
console.log(parallel([a(1,2),b ]));
