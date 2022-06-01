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

export function updateAmountRequest(product, amount) {
  return { 
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    product,
    amount,
  };
}

export function updateAmountSuccess(product, amount) {
  return { 
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    product,
    amount,
  };
}