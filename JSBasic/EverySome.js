function some (arr, pattern) {
    var result = false;
    for(var i = 0; i < arr.length; i++) {
        if (pattern(arr[i])) {
            result = true;
            return result;
        }
    }
    return result;
}

console.log(some([1, 4, NaN, 6], Number.isNaN));
console.log(some([1,2,6], Number.isNaN));



function every (arr, pattern) {
    var result = true;
	
    for(var i = 0; i < arr.length; i++) {
        if (!pattern(arr[i])) {
            result = false;
            return result;
        }
    }
    return result;
}

console.log(every([1, 4, NaN, 6], Number.isNaN));
console.log(every([NaN, NaN], Number.isNaN));