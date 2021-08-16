import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { bindActionCreators } from 'redux';

import * as CartAcions from '../../store/modules/cart/actions';

import api from '../../services/api';
import { formatPrice } from '../../utils/format';

import { ProductList } from './styles';


function Home({ amount, addToCartRequest }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price)
      }));

      setProducts(data);
    }

    loadProducts();
  }, [])

  function handleAddProduct(product) {
    addToCartRequest(product);
  };

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img
            src={product.image}
            alt={product.title}/>
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button" onClick={() => handleAddProduct(product)}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF"/> 
              {amount[product.id] || 0}
            </div>

            <span>Adicionar ao carrinho</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartAcions, dispatch)

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    console.log(amount);
    amount[product.id] = product.amount;

    return amount;
  }, {}),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
