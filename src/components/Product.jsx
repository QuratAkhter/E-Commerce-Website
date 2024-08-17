import { useContext } from "react";
import Ratings from "./Ratings";
import { ProductList as PList } from "../store/main-store"
import {motion} from "framer-motion"

const Product = ({ product, setSelectedTab }) => {
    let actual_price = product.price + (product.price * (product.discountPercentage / 100))
    actual_price = actual_price.toFixed(2)
    let count = product.rating
    let ratingArr = []
    for (let i = 0; i < 5; i++) {
        if (count > 1) {
            ratingArr.push(1)
            count = count - 1
        }
        else if (count > 0 && count < 1) {
            ratingArr.push(0.5)
            count = count - 1
        }
        else {
            ratingArr.push(0)
        }
    }

    let { setCurProduct } = useContext(PList)

    return <div className="col ">
        <motion.div 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
        className="card h-100 product-card" onClick={() => {
            setCurProduct(product)
            setSelectedTab("Product Detail")
        }}
        >
            <img src={product.thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="actual-price">$ {actual_price}</p>
                <span className="price">$ {product.price}</span>
                <span className="discount">({product.discountPercentage}% off)</span>
                <div><Ratings ratings={product.rating} size={10} /></div>

            </div>
        </motion.div>
    </div>
}
export default Product