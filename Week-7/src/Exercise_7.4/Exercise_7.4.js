function buyAndSellStock(arr){
    let maxProfit = 0
    let minSoFar = 0

    for(let i = 0; i<arr.length; i++){
        minSoFar = Math.min(minSoFar, arr[i]);
        let profit = arr[i] - minSoFar;
        maxProfit = Math.max(maxProfit, profit);
    }

    return maxProfit
}

module.exports = buyAndSellStock