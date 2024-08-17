import { useContext } from "react"
import Category from "./Category"
import { CategoryList } from "../store/category-store"

const Categories = ({ setSelectedTab }) => {

    let { categories } = useContext(CategoryList)
    return <div className="row row-cols-1 row-cols-md-3 row-cols-xxl-4 row-cols-sm-2 g-4 m-md-5 mx-2">
        {categories.map((categ) => (
            <Category key={categ.title} categ={categ} setSelectedTab={setSelectedTab} />
        ))}
    </div>

}
export default Categories