/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let right = 1
    let left = 0
    let maxProfit = 0;

    if(prices.length <= 1){
        return 0
    }

    do{
        let profit = prices[right] - prices[left]
        maxProfit = Math.max(profit, maxProfit)
        if(profit == 0){
            ++right
        }else if (profit < 0){
            left = right
            ++right
        }else{
            ++right
        }
    }while(right <= prices.length-1)
    return maxProfit
};