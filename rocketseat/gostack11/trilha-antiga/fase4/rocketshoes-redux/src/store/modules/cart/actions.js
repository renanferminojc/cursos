export function addToCartRequest(product) {
  return {
    type: '@cart/ADD_REQUEST',
    product,
  }
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  }
}

export function removeFromCart(product) {
  return { 
    type: '@cart/REMOVE',
    product,
  };
}

export function updateAmount(product, amount) {
  return { 
    type: '@cart/UPDATE_AMOUNT',
    product,
    amount,
  };
}