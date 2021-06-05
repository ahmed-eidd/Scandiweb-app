export const getCurrentPrice = (prices, currentCurrency) => {
  return prices?.find((price) => price.currency === currentCurrency)?.amount;
};
