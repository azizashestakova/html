function returnBooleanSome (arr, index) {
    var result = false;
    for(var i = 0; i < arr.length; i++) {
        if (index(arr[i])) {
            result = true;
            return result;
        }
    }
    return result;
}

console.log(returnBooleanSome([1, 4, NaN, 6], Number.isNaN));
console.log(returnBooleanSome([1,2,6], Number.isNaN));



function returnBooleanEvery (arr, index) {
    var result = true;
	
    for(var i = 0; i < arr.length; i++) {
        if (!index(arr[i])) {
            result = false;
            return result;
        }
    }
    return result;
}

console.log(returnBooleanEvery([1, 4, NaN, 6], Number.isNaN));
console.log(returnBooleanEvery([NaN, NaN], Number.isNaN));