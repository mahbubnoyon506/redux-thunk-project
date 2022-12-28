import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducers from "./reducers/rootReducers";
import cartCounter from "./middleware/cartCounter";

const store = createStore(
    rootReducers, 
    composeWithDevTools(applyMiddleware(cartCounter))
    );

export default store;