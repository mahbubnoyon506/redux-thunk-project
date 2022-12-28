import { loadProduct } from "../../actionCreators/productAction";

const getProducts = () => {
    return async (dispatch, getState) => {
     const res = await fetch('http://localhost:8000/products')
     const data = await res.json();
     console.log(res)
    }
}
export default getProducts;