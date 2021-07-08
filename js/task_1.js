function cloneDeep (obj){
    return {...obj}
}

const obj = {
    name: 'Alex',
    age: '25'
}

let cloneObj = cloneDeep(obj);
console.log(cloneObj);