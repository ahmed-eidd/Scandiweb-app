export const isInCart = (products, product) => {
  return !!products.find((p) => p.name === product.name);
};
