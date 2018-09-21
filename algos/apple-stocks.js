const getMaxProfit = (stockPrices) => {
  // if there is no stock to buy and sell
  if(stockPrices.length < 2) throw new Error('Getting a profit requires at least 2 prices');
  let minPrice = stockPrices[0];
  let maxProfit = Number.NEGATIVE_INFINITY;
  for(let i = 1; i < stockPrices.length; i++) {
    const currentPrice = stockPrices[i];
    // to handle edge case of what if stock prices keep going down
    maxProfit = Math.max(currentPrice - minPrice, maxProfit);
    minPrice = Math.min(currentPrice, minPrice);
  }
  console.log(maxProfit);
  return maxProfit;
}

const stockPrices = [10,4,3,1];
getMaxProfit(stockPrices);