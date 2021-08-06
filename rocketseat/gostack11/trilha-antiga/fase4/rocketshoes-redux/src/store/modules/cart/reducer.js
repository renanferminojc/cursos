export default function cart(state = [], action) {
  const productIndex = state.findIndex(p => p.id === action.product.id);
  switch (action.type) {
    case 'ADD_TO_CART':
      if (productIndex >= 0) {
        state[productIndex].amount++;
        return [...state];
      } else {
        return [...state, {
          ...action.product,
          amount: 1
        }];
      }
    case 'REMOVE_FROM_CART':
      if (productIndex >= 0) {
        state.splice(productIndex, 1);
        return [...state];
      } else {
        return state;
      }
    default:
      return state;
  }
}
