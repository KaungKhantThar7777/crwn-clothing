export const addItemToCart = (items, newItem) => {
  const isExist = items.find((item) => item.id === newItem.id);

  if (isExist) {
    return items.map((item) => {
      return item.id === newItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  } else {
    return [...items, { ...newItem, quantity: 1 }];
  }
};
