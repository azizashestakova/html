function countCharacters(str, symbol) {
    str = str.toLowerCase();
    var count = str.length;
    var result = 0;
    for(var i=0; i < count; i++) {
        if(str.charAt(i) == symbol) {
            result++;
        }
    }
    return result;
}
console.log(countCharacters('My random string', 'm'));
