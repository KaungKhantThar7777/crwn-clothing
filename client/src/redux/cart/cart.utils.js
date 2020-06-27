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

export const removeItemFromCart = (items, id) => {
  return items.filter((item) => item.id !== id);
};

export const decreaseQty = (items, id) => {
  const item = items.find((item) => item.id === id);

  if (item.quantity === 1) {
    return items.filter((item) => item.id !== id);
  }

  return items.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
  );
};
