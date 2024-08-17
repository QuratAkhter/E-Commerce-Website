const OrderPlaceItems = ({ product }) => {
    let totalPrice = product.price * product.quantity

    return <div className="row p-3">
        <div className="col-4">{product.title}</div>
        <div className="col-4">{product.quantity}</div>
        <div className="col-4">$ {totalPrice}</div>
    </div>
}
export default OrderPlaceItems