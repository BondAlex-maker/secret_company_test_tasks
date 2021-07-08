function array_normalize(arr, schema, transform){
    let result = []
        arr.some((e)=> {
        if(transform === true){
            if(schema === 'string' && typeof e !== 'object' /*typeof e !== function etc...*/){ //and same conditions
                result.push(e.toString());
            }if(schema === 'number' && typeof e !== 'string' && typeof e !== 'object'){ //...
                result.push(Number(e));
            }
        }else{
       if(typeof e === schema){  // ...
           result.push(e);
       }
    }})
    return result;

}


const array = [1,2,5,6,7.156, 'google', {name: 'Alex'}];
console.log(array_normalize(array, 'number', true));