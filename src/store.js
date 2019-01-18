import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; // to teach Redux how to deal with functions as actions
import rootReducer from './reducers/rootReducer';

export default function configureStore(initialState={}) {
  return createStore(
    rootReducer,
    compose(applyMiddleware(thunk), window.navigator.userAgent.includes('Chrome') ?
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : compose)
  );
}
