    function array_find (arr, search){
    let reg;
    if(search instanceof RegExp){
        reg = search;
    }else{
        reg = new RegExp(search)
    }
/*    ;*/
    console.log(reg)

        let result = [];
        let i = 0;
        while (i<arr.length){
            if(reg.test(arr[i])){
                result.push(arr[i]);
                i++;
            }else{
                i++;
            }

        }
        return result;

}

console.log(array_find([1,2,5,6 , 'google'], 'google' ));