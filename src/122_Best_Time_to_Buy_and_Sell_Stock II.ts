function maxProfit(prices: number[]): number {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit = profit + (prices[i] - prices[i - 1]);
    }
  }

  return profit;
}

const prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices));
