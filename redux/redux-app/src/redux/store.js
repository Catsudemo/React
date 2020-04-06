import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import testComponentReducer from './3_reducers/testComponentReducer';

const rootReducer = combineReducers({
  testComponentReducer,
});

function configureStore() {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
  const persistor = 'persistStore(store)';
  return { persistor, store };
}

export default configureStore;
