var maxProfit = function(prices) {
	let maxVal = 0;
	let biggestProfit = 0;
	for (let i = prices.length-1; i >= 0; i--) {
		maxVal = Math.max(maxVal, prices[i]);
		biggestProfit = Math.max(biggestProfit, maxVal - prices[i]);
	}	
	return biggestProfit;
}

let res = maxProfit([7,1,5,3,6,4]);
console.log(res);