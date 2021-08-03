import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      {/*<Header />*/}
      <GlobalStyle/>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
