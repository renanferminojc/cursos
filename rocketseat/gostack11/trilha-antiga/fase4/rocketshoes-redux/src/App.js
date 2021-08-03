import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import Header from './components/Header';

import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <GlobalStyle/>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
