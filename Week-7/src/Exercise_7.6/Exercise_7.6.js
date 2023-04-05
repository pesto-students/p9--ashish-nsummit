function threeSumClosest(arr, target) {
    arr.sort((a, b) => a - b);
    let closestSum = Infinity;
    const n = arr.length;
    for (let i = 0; i < n - 2; i++) {
      if (i > 0 && arr[i] === arr[i-1]) {
        continue;
      }
      let left = i + 1;
      let right = n - 1;
      while (left < right) {
        const sum = arr[i] + arr[left] + arr[right];
        if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
          closestSum = sum;
        }
        if (sum < target) {
          left++;
        } else if (sum > target) {
          right--;
        } else {
          return target;
        }
      }
    }
    return closestSum;
  }

module.exports = threeSumClosest  