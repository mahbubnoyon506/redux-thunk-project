import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducers from "./reducers/rootReducers";
import cartCounter from "./middleware/cartCounter";
import thunk from "redux-thunk";


const store = createStore(
    rootReducers, 
    composeWithDevTools(applyMiddleware(cartCounter, thunk))
    );

export default store;