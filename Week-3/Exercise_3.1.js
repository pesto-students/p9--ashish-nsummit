function memoize(reducer) {
    const cache = {};
  
    return function memoizedFunction(...args) {
      const key = JSON.stringify(args);
  
      if (cache[key]) {
        return cache[key];
      }
  
      const result = reducer(...args);
      cache[key] = result;
  
      return result;
    };
  }
  
  function add(a=0,b=0){
    return a+b
  }
  
const memoizedAdd = memoize(add);
console.log(memoizedAdd(200, 100)); // 300
console.log(memoizedAdd(100));// 100 
console.log(memoizedAdd(100, 200)); // 300
console.log(memoizedAdd(100, 100));// 200 (from cache)
  