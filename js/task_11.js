let associativeArray = {
firstHuman : {name: 'Vasya',
                skill: 9,},
secondHuman : {name: 'Fedor',
                skill: 5,},
}

function arrayPluck(associativeArr,path){
    let result = [];
    for(let key in associativeArr){
    result.push(associativeArr[key][path]);
    }
    return result;
}

console.log(arrayPluck(associativeArray, 'skill'));