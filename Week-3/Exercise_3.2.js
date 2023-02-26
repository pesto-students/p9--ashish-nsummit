function greetUsingCall(greeting, name) {
    console.log(`${greeting}, ${name}`);
  }
  
  greetUsingCall.call(null, "Hello", "John"); 
  
  
  function greetUsingBind(greeting, name) {
    console.log(`${greeting}, ${name}`);
  }
  
  const boundGreet = greetUsingBind.bind(null, "Hello");
  boundGreet("Jane"); 
  
  
  function greetUsingApply(greeting, name) {
    console.log(`${greeting}, ${name}`);
  }
  
  greetUsingApply.apply(null, ["Hello", "Jim"]); 
  