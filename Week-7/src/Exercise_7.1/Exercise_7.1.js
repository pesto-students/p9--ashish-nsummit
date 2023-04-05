function maxSubarraySum(numbers) {
    let maxSum = -Infinity;
    let currentSum = 0;
    for (let number of numbers) {
        currentSum = Math.max(number, currentSum + number);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

module.exports = maxSubarraySum