// Write your solution in this file!
let employee = {
    name: "John Doe",
    streetAddress: "5th & 13th Wallstreet"
}

function updateEmployeeWithKeyAndValue(obj, keyVal, value){
    let newObj = {...obj};
    newObj[keyVal] = value;
    return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, keyVal, value){
    let Obj = obj;
    Obj[keyVal] = value;
    return Obj;
}
function deleteFromEmployeeByKey(empl, key){
    let newObj = {...empl};
    delete newObj[key];
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(empl, key){
    let newObj = empl;
    delete newObj[key];
    return newObj;
}