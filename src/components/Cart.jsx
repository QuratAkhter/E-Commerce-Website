import { useContext, useState } from "react";
import CartProduct from "./CartProduct";
import OrderPlaceItems from "./OrderPlaceItems";
import { CartList } from "../store/cart-store";
import EmptyCart from "./EmptyCart";

const Cart = () => {
    const { cartList, resetCart } = useContext(CartList);
    const [alert, setAlert] = useState(null);

    let totalPrice = cartList.reduce((acc, product) => acc + (product.price * product.quantity), 0);

    const handlePlaceOrder = () => {
        setAlert({
            message: 'Order Placed Successfully!',
            type: 'success'
          });
          
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 order-md-last">
                        <div className="lower-navbar m-3">
                            <div className="row p-3">
                                <div className="col-4 fw-bold">Items</div>
                                <div className="col-4 fw-bold">Qty</div>
                                <div className="col-4 fw-bold">Price</div>
                            </div>
                            <div>
                                {cartList.map((product) => (
                                    <OrderPlaceItems key={product.id} product={product} />
                                ))}
                            </div>
                            <div className="row fw-bold p-3">
                                <div className="col-8">Total Price</div>
                                <div className="col-4">$ {totalPrice.toFixed(2)}</div>
                            </div>
                            <button
                                id="liveAlertBtn"
                                type="button"
                                className="btn btn-success cart-btn btn-lg m-3 border-white"
                                onClick={() => {
                                    if (cartList.length !== 0) {
                                        handlePlaceOrder()
                                        resetCart()
                                    }
                                }}
                            >
                                Place Order
                            </button>
                            {alert && (
                                <div className={`alert alert-${alert.type} alert-dismissible`} role="alert">
                                    <div>{alert.message}</div>
                                    <button type="button" className="btn-close" onClick={() => setAlert(null)}></button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-md-8">
                        {cartList.length === 0 ? <EmptyCart /> : cartList.map((product) => (
                            <CartProduct key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
