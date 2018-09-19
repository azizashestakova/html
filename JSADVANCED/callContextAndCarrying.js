function sumWith(number) {
    return (this.currentValue += number);
}
var number = 2;
var g = sumWith.bind({ currentValue: 3 });
console.log(g(number));

//////////////////////////

function sumWith(number) {
    return (this.currentValue += number);
}
var number = 2;

for (var i = -1; i <= 10; i += 2) {
    alert(sumWith.call({ currentValue: i }, number));
}

//////////////////////////

function sumWith(number) {
    return (this.currentValue += number);
}
var number = 2;
alert(sumWith.call({ currentValue: 3 }, number));

function sumWith(number) {
    return (this.currentValue += number);
}
var number = 2;
var g = sumWith.bind({ currentValue: 3 });
console.log(g(number));
