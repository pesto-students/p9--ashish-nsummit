function createStack() {
    let items = [];
  
    return {
      push(item) {
        items.push(item);
      },
      pop() {
        return items.pop();
      }
    };
  }
  
  const stack = createStack();
  stack.push(12);
  stack.push(8);
  stack.pop();