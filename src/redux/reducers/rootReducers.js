import filterReducers from './filterReducers';
import productReducers from './productReducers'
const { combineReducers } = require("redux");

const rootReducers = combineReducers({
    product: productReducers,
    filter: filterReducers
});

export default rootReducers;