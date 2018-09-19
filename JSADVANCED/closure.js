function makeCounter(){
	var Count = 0;
	makeCounter.prototype.next = function () {
		Count++;
    return Count;
	};
  makeCounter.prototype.prev = function () {
		Count--;
    return Count;
	};
}

var counter = new makeCounter();
alert(counter.next());
alert(counter.next());
alert(counter.next());
alert(counter.next());
alert(counter.prev());
alert(counter.prev());
alert(counter.prev());

//////////////////////

function makeCounter() { 
    let count = 0; 
    return { 
    prev: () => --count, 
    next: () => ++count 
    } 
} 
var counter = new makeCounter(); 
alert(counter.next()); 
alert(counter.next()); 
alert(counter.next()); 
alert(counter.next()); 
alert(counter.next()); 
alert(counter.prev()); 
alert(counter.prev()); 
alert(counter.prev()); 
alert(counter.prev());