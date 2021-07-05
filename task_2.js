const arrays = [[1, 2, 3], [4, 5], [6]];
function expand (arr){
    return arr.reduce((a,b) => a.concat(b));
}

console.log(expand(arrays))