function reverse(array) {
    var output = [];
    while (array.length) {
      output.push(array.pop());
    }
  
    return output;
  }
  
  console.log(reverse([1, 2, 3, 4, 5, 6, 7]));
  
  
  function reverseArrayInPlace(array) {
    for (var i = array.length - 1, j = 0; i > j; i--, j++) {
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  var array = ['A', 'B', 'C', 'D'];
  reverseArrayInPlace(array);
  console.log(array);