export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const productIndex = state.findIndex(p => p.id === action.product.id);

      if(productIndex >= 0) {
        state[productIndex].amount++
        return [...state];
      } else {
        return [...state, {
          ...action.product,
          amount: 1
        }]
      }

    default:
      return state;
  }
}
