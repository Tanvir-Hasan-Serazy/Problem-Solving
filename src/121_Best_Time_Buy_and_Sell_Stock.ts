function maxProfit(prices: number[]): number {
  let left = 0; // buy
  let right = 1; // serll
  let maxP = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      maxP = Math.max(maxP, profit);
      right++;
    } else {
      left = right;
      right = right + 1;
    }
  }

  return maxP;
}

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
