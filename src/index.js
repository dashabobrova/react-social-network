import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import { Provider } from './storeContext';
/* addPost('Samuraji'); */

let rerenderEntireTree  = () => {
  ReactDOM.render(
    <React.StrictMode>
       <BrowserRouter>
        <Provider store={store}>
            <App />
          </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};


rerenderEntireTree();

store.subscribe(() => { // анонимная, чтобы передавать state при каждом перерендере
  rerenderEntireTree();
});

reportWebVitals();