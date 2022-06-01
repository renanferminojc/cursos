import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';

import Header from './components/Header';
import GlobalStyle from './styles/global';

// import history from './services/history';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      {/* <Router history={history}> */}
      <BrowserRouter>
        <Header/>
        <GlobalStyle/>
        <Routes/>
        <ToastContainer autoClose={3000}/>
      {/* </Router > */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
