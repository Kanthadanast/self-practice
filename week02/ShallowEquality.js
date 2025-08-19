let book1 = {
    isbn: "123456789",
    title: "Javascript",
}
let book2 = {
    isbn: "123456789",
    title: "Javascript",
}

function shallowequality(object1, object2) {
    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)
    if(keys1.length !== keys2.length){
        return false
    }
    for (let key of keys1){  
        if(object1[key] !== object2[key]){
            return false
        }
    }
    return true
}

console.log("shallow equality:" + shallowequality(book1,book2));

