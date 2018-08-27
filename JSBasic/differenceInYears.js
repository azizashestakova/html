function differenceInYears (date1, date2) {
    var x = date1.getFullYear();
    var y = date2.getFullYear();
    return y - x;
    
}
console.log(differenceInYears(new Date("2014, 10, 2"), new Date("2016, 10, 2")));
// console.log(differenceInYears(new Date("2014, 0"), new Date("2014, 6"))); пока не работает