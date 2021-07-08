function array_unique(arr1, arr2){
    let result = []
    let firstArr = [...arr1];
    let secondArr = [...arr2];
    for (let i=0; i<firstArr.length; i++){
    if(!result.includes(firstArr[i])){
        result.push(firstArr[i]);
    }}
    for (let i=0; i<secondArr.length; i++){
    if(!result.includes(secondArr[i])){
        result.push(secondArr[i]);
    }}
    return result;
}

console.log(array_unique([1,2,2,2,2,5], [2,6,5]));