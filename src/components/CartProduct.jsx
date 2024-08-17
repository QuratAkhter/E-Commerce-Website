import { useContext } from "react"
import Ratings from "./Ratings"
import { CartList } from "../store/cart-store"
const CartProduct = ({ product }) => {
    let { onDelete } = useContext(CartList)
    let actual_price = product.price + (product.price * (product.discount / 100))
    actual_price = actual_price.toFixed(2)

    return <div className="card my-3 position-relative m-auto" style={{ maxWidth: "700px" }}>
        <button type="button" className="btn-close position-absolute top-0 end-0 m-1" aria-label="Close" onClick={() => onDelete(product.id)}></button>
        <div className="row g-0">
            <div className="col-md-4">
                <img
                    src={product.thumbnail}
                    className="img-fluid rounded-start"
                    alt="..."
                />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <div className="fw-semibold align-items-center">
                        {product.ratings} <Ratings ratings={product.ratings} size={10} />
                    </div>
                    <p className="actual-price">$ {actual_price}</p>
                    <span className="price fw-bold h4">{product.price}</span>
                    <span className="discount">({product.discount}% off)</span>
                    <p className="fst-italic mb-0">
                        <strong>Brand: </strong> {product.brand}
                    </p>
                    <p className="fst-italic m-0">Qty: {product.quantity}</p>
                </div>
            </div>
        </div>
    </div>
}
export default CartProduct