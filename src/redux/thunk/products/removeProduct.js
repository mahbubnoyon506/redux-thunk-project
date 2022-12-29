import { removeProduct } from "../../actionCreators/productAction"

const deleteProduct = (id) => {
    return async(dispatch, getState) => {
      const res = await fetch(`http://localhost:8000/products/${id}`, {
        method : 'DELETE',
        headers: {
            'content-type' : 'application/json'
        }
      })
      const data = await res.json()
      if(data.acknomledged){
        dispatch(removeProduct(id))
      }
    }
}

export default deleteProduct;