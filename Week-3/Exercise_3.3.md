### Code 

```JS
function createIncrement() {
    let count = 0;
    let message = `Count is ${count}`;
    function increment() {
        count++;
    }
    function log() {
        console.log(message);
    }
    return [increment, log];
}
const [increment, log] = createIncrement(); 
increment();
increment();
increment();
log();

```

### Output

```SHELL
Count is 0
```

### Explaination for the above code 

The createIncrement() function creates a closure by returning an array of two functions, increment and log. The count and message variables are local to the closure and are not accessible from the outside.

The increment() function increments the count variable, which is part of the closure, and does not return anything. The log() function logs the message variable, which is also part of the closure, to the console.

When the code is executed, increment() is called three times, which increments the count variable to 3. Then log() is called, which logs the message "Count is 0" to the console.

The message is "Count is 0" because it was assigned to the message variable when the closure was created, and the count variable was 0 at that time. The count variable was incremented three times by calling increment(), but the message variable still contains the original value.