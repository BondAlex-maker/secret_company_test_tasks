const arr1 = [1,2,5,6,undefined,null,{}, []];

const arr2 = ['just', 'do', 'it','just', 'do', 'it',{}, null, undefined];

function populateObjects(keys, values) {

    let obj = {};
    let correctKeys = [];
    for(let i = 0; i<keys.length; i++){
        if(keys[i] !== undefined && keys[i] !== null && typeof keys[i] !== 'object' ){
            correctKeys.push(keys[i]);
            console.log(correctKeys);
        }
    }
    for (let i = 0, l = correctKeys.length; i < l; i++) {

        obj[correctKeys[i]] = values[i];
    }
    return obj;
}

console.log(populateObjects(arr1,arr2));