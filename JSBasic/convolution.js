var mergeArrays = (...arrays) => [...new Set([].concat(...arrays))];
console.log(mergeArrays([1, 2], [3, 4], [5, 6]));
console.log(mergeArrays([1, 2], [2, 4], [4, 6]));