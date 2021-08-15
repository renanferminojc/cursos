import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { formatPrice } from '../../../utils/format';

import { addToCartSuccess, updateAmount} from './actions';

function* addToCart({ product }) {
  const productExists = yield select(state => 
    state.cart.find(p => p.id === product.id)
    );
    
    if(productExists) {
      const amount = productExists.amount + 1;

      yield put(updateAmount(product, amount));
    } else {
      const response = yield call(api.get, `/products/${product.id}`)
     
      const data = {
        ...response.data,
        amount: 1,
        priceFormatted: formatPrice(response.data.price)
      }

      yield put(addToCartSuccess(data));
    }
  }

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
])