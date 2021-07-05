var arr = [1, 2, 3];

Array.prototype.addNewValue = function (arr, value){
    arr.splice(0,0,value);
    return arr
}
console.log(Array.prototype.addNewValue(arr,1));
