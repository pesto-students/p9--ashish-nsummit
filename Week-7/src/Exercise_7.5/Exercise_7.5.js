function pairWithDifference(arr, difference) {
    arr.sort((a, b) => a - b);
    let i = 0;
    let j = 1;
    while (i < arr.length && j < arr.length) {
      if (i !== j && arr[j] - arr[i] === difference) {
        return 1;
      } else if (arr[j] - arr[i] < difference) {
        j++;
      } else {
        i++;
      }
    }
    return 0;
  }

module.exports = pairWithDifference