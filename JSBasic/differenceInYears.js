function getDifferenceInYears (startDate, finishDate) {
    var FullFinishYear = startDate.getFullYear();
    var FullStartYear = finishDate.getFullYear();
    var differenceInYears = FullStartYear - FullFinishYear;
    return differenceInYears;
}

console.log(getDifferenceInYears(new Date("2014, 10, 2"), new Date("2016, 10, 2")));