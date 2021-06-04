export const getCurrentPrice = (prices, currentCurrency) => {
  console.log('prices', currentCurrency)
  return prices?.find((price) => price.currency === currentCurrency)?.amount;
};
