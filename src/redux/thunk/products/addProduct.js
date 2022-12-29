import { json } from "react-router-dom"
import { addProduct } from "../../actionCreators/productAction";

const addProductData = (product) => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:8000/products', {
            method: 'POST',
            body: json.stringify(product),
            headers: {
                'content-type': 'application/json'
            },
        });
        const data = await res.json()
        if(data.acknowledged){
            dispatch(addProduct({
                _id: data.insertedID,
                ...product,
            }))
        }
    }
}
export default addProductData;