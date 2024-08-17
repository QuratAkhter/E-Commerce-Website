import { useContext, useEffect } from "react"
import Product from "./Product"
import { ProductList as PList } from "../store/main-store"
import NoProduct from "./NoProduct"
import Loader from "./Loader"
const ProductList = ({ setSelectedTab }) => {
  const { productList,fetching } = useContext(PList)


  return <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-xxl-5  m-4  g-4">
    {fetching && <Loader/>}
    {!fetching && productList.length === 0 && <NoProduct />}
    {!fetching && productList.map((product) => <Product key={product.id} setSelectedTab={setSelectedTab} product={product} />)}
  </div>
}
export default ProductList