function replaceQuotes (str) {
    var reg = /(^|\W)'|'(\W|$)/g;
    return str.replace(reg, '$1"$2');
}

console.log(replaceQuotes("I'm the 'hero'"));