function getNames(date) {
    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];   
    date = new Date(2018, 8, 26);
    var result =[month[date.getMonth() - 1], days[date.getDay()]];
    return result.join();
}
  
console.log(getNames(new Date()));