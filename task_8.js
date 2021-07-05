function arr_skip_until(arr, value){
    let indexBeforeSkipping = arr.indexOf(value);
    let result = arr.slice(indexBeforeSkipping)
    return result;
}

console.log(arr_skip_until([1,2,4,6, 'google'], 1));