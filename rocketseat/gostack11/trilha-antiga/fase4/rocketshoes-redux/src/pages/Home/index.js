import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.zattini.com.br/produtos/tenis-adidas-grand-court-base-feminino/05/COL-7145-205/COL-7145-205_zoom1.jpg?ts=1562004219&ims=544x"
          alt="shox"/>
        <strong>Tênis 10/10</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.zattini.com.br/produtos/tenis-adidas-grand-court-base-feminino/05/COL-7145-205/COL-7145-205_zoom1.jpg?ts=1562004219&ims=544x"
          alt="shox"/>
        <strong>Tênis 10/10</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.zattini.com.br/produtos/tenis-adidas-grand-court-base-feminino/05/COL-7145-205/COL-7145-205_zoom1.jpg?ts=1562004219&ims=544x"
          alt="shox"/>
        <strong>Tênis 10/10</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.zattini.com.br/produtos/tenis-adidas-grand-court-base-feminino/05/COL-7145-205/COL-7145-205_zoom1.jpg?ts=1562004219&ims=544x"
          alt="shox"/>
        <strong>Tênis 10/10</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.zattini.com.br/produtos/tenis-adidas-grand-court-base-feminino/05/COL-7145-205/COL-7145-205_zoom1.jpg?ts=1562004219&ims=544x"
          alt="shox"/>
        <strong>Tênis 10/10</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 3
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
