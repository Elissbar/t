import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux'; // Нужен, чтобы соединить store с приложением 
import reduxThunk from 'redux-thunk';
import rootReducer from './redux/rootReducer';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const loginMiddleware = store => next => action => {
    const result = next(action)
    console.log('Middleware', store.getState())
    return result
}

const store = createStore(rootReducer, composeEnhancers( applyMiddleware( loginMiddleware, reduxThunk )) );

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
