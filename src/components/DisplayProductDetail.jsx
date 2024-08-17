import { FaHeartCirclePlus } from "react-icons/fa6";
import Review from "./Review";
import Ratings from "./Ratings";
import { useContext, useState } from "react";
import { CartList } from "../store/cart-store";

const DisplayProductDetail = ({ product }) => {
    let actual_price = product.price + (product.price * (product.discountPercentage / 100))
    actual_price = actual_price.toFixed(2)

    const [alert, setAlert] = useState(null);


    const handlePlaceOrder = () => {
        setAlert({ message: 'Product Added to Cart Successfully!', type: 'success' });
    };

    let { onAdd } = useContext(CartList)

    let [qty, setQty] = useState(1)
    const onIncreaseQty = () => {
        let newQty = qty + 1
        setQty(newQty)
    }
    const onDecreaseQty = () => {
        if (qty > 1) {
            let newQty = qty - 1
            setQty(newQty)
        }
    }

    const onAddToCart = () => {
        let newProduct = {
            id: product.id,
            title: product.title,
            ratings: product.rating,
            price: product.price,
            discount: product.discountPercentage,
            brand: product.brand,
            quantity: qty,
            thumbnail: product.thumbnail
        }
        onAdd(newProduct)
        setQty(1);
    }

    return <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <div className="fw-semibold align-items-center">{product.rating} <Ratings ratings={product.rating} />
        </div>
        <p className="actual-price">$ {actual_price}</p>
        <span className="price fw-bold h4">$ {product.price}</span>
        <span className="discount">({product.discountPercentage}% off)</span>
        <p className="fst-italic"><strong>Brand: </strong> {product.brand}</p>
        <div className="my-3 font-monospace">Quantity:
            <button className="btn increment-btn m-1" onClick={onDecreaseQty}>-</button>
            <span className="bg-light p-3 py-2 m-1">{qty}</span>
            <button className="btn increment-btn m-1" onClick={onIncreaseQty}>+</button>
        </div>
        <button type="button" id="liveToastBtn liveAlertBtn" className="btn btn-success btn-lg m-1" onClick={() => {
            onAddToCart()
            handlePlaceOrder()
        }}>Add to Cart</button>
        <button type="button" className="btn btn-outline-success btn-lg m-1"> <FaHeartCirclePlus />
            Whishlist</button>
        {alert && (
            <div className={`alert alert-${alert.type} alert-dismissible`} role="alert">
                <div>{alert.message}</div>
                <button type="button" className="btn-close" onClick={() => setAlert(null)}></button>
            </div>
        )}

        <div>
            <p className="fst-italic my-2"><strong>Tags: </strong></p>
            {product.tags.map((tag) => <span key={tag} className="badge text-bg-secondary mx-2 p-1 ">{tag}</span>)}
        </div>
        <div className="lower-navbar mt-4 p-2"><p className="fst-italic fw-bold">Description</p>{product.description}</div>

        <Review reviews={product.reviews}></Review>

    </div>
}

export default DisplayProductDetail