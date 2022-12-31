import { createStore,applyMiddleware,compose } from "redux";
import { Reducers } from "./Reducers/index";
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store=createStore(Reducers,composeEnhancers(applyMiddleware(thunk))
);

export default Store;