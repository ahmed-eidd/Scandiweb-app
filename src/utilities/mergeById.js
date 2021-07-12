export const mergeByIde = (oldItems, newItems) => {
  const merged = [...oldItems];
  newItems.forEach((item) => {
    const indexOf = oldItems.findIndex((oldItem) => oldItem.name === item.name);
    if (indexOf > -1) {
      merged[indexOf] = item;
    } else {
      merged.push(item);
    }
  });
  return merged;
};
