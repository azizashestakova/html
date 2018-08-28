function multiplyOrThrow (a, b) {
    if(Math.random() < 0.5) {
      return a * b;
    } else {
      throw 'MultiplicatorUnitFailure';
    }
} 
  
  function continuesToCauseMultiply(a, b) {
    let done = false;
    while (!done) {
      try {
        return multiplyOrThrow(a, b);
        done = true;
      }
      catch (e) {
      }
    }
  }
  console.log(continuesToCauseMultiply(6, 7));