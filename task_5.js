let arr = ['Solnce', 'vishlo', 'iz', 'za', 'tuchi'];
function recuseLog(arr, i) {

    if(i<arr.length){
        let result = arr[i];
        recuseLog(arr, i+1)
        console.log(result)
        return result;
    }
}

console.log(recuseLog(arr, 0))