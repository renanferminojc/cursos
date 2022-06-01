export default function cart(state = [], action) {
  const productIndex = state.findIndex(p => p.id === action.product.id);
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
        return [...state, {
          ...action.product
        }];
    case '@cart/REMOVE':
      if (productIndex >= 0) {
        state.splice(productIndex, 1);
        return [...state];
      } else {
        return state;
      }
    case '@cart/UPDATE_AMOUNT_SUCCESS':
      if(productIndex >= 0) {
        state[productIndex].amount = Number(action.amount);
        return [...state];
      }
      return [...state];
    default:
      return state;
  }
}
