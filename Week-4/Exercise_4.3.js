function fibonacci() {
    let [a, b] = [0, 0];
    return {
      [Symbol.iterator]: function() {
        return this;
      },
      next: function() {
        [a, b] = [b, (a + b) || 1];
        return { value: a, done: false };
      }
    };
  }
  
  const fib = fibonacci();
  let i = 0;
  for (let number of fib) {
    console.log(number);
    i++;
    if (i === 11) {
      break;
    }
  }
  