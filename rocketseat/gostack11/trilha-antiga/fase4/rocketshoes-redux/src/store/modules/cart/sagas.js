import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { formatPrice } from '../../../utils/format';

import { addToCartSuccess, updateAmount} from './actions';

function* addToCart({ product }) {
  const productExists = yield select(state => 
    state.cart.find(p => p.id === product.id)
    );

    const stock = yield call(api.get, `/stock/${product.id}`);

    const stockAmount = stock.data.amount;
    const currentAmount = productExists ? productExists.amount : 0;

    const amount = currentAmount + 1;

    if(amount > stockAmount) {
      toast.error('Quantidade solicitada fora de estoque');
      return;
    }

    if(productExists) {

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