function countCharacters(str) {
    var count = count.toLowerCase();
    count = str.length;
    var result = 0;
    for(i=0; i < count; i++) {
        if(str.charAt(i) == " ") {
            result++;
        }
        result++;
    }
    return result;
}
