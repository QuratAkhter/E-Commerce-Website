
import ProductPic from "./ProductPic";
import ProductMetaData from "./ProductMetaData";
import DisplayProductDetail from "./DisplayProductDetail";
import { useContext } from "react";
import { ProductList } from "../store/main-store";

const ProductDetail = () => {
    let { product } = useContext(ProductList)





    return <div className="card mb-3 m-auto p-md-5 p-sm-3" style={{ "maxWidth": '90%' }}>
        <div className="row g-0">
            <div className="col-md-4">
                <ProductPic thumbnail={product.thumbnail} images={product.images} />
                <ProductMetaData dimensions={product.dimensions} returnPolicy={product.returnPolicy} warrantyInformation={product.warrantyInformation} shippingInformation={product.shippingInformation} qrCode={product.meta.qrCode} />
            </div>
            <div className="col-md-8 p-md-4">
                <DisplayProductDetail product={product} />
            </div>
        </div>
    </div>
}
export default ProductDetail