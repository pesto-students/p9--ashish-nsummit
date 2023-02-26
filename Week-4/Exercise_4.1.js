function getNumber(resolveCallback, rejectCallback, delay) {
    const randomNumber = Math.floor(Math.random() * 100);
    let state = "PENDING";
    let result;
  
    setTimeout(() => {
      if (randomNumber % 5 === 0) {
        state = "REJECTED";
        result = randomNumber;
        rejectCallback(result);
      } else {
        state = "RESOLVED";
        result = randomNumber;
        resolveCallback(result);
      }
    }, delay);
  
    return {
      then(onFulfilled) {
        if (state === "RESOLVED") {
          onFulfilled(result);
        }
        return this;
      },
      catch(onRejected) {
        if (state === "REJECTED") {
          onRejected(result);
        }
        return this;
      }
    };
  }
  
  getNumber(
    result => console.log(`Resolved: ${result}`),
    result => console.log(`Rejected: ${result}`),
    1000
  )
    .then(result => console.log(`Fulfilled: ${result}`))
    .catch(result => console.log(`Rejected: ${result}`));
  



