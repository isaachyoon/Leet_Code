var minCostClimbingStairs = function(cost) {
	cost.push(0);
	for (let i = 2; i < cost.length; i++) {
		cost[i] = Math.min(cost[i] + cost[i-1], cost[i] + cost[i-2]);
	}
	return cost[cost.length - 1];
}

let arr1 = [10, 15, 20];
let arr2 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
let res = minCostClimbingStairs(arr2);
console.log(res)