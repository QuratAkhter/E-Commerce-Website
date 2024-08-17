import { useContext, useRef } from "react"
import { CategoryList } from "../store/category-store"
import Logo from "./Logo.png"
import { ProductList } from "../store/main-store"


const LowerNavbar = ({ setSelectedTab }) => {
  let { categories } = useContext(CategoryList)
  let { getProductList, searchProduct } = useContext(ProductList)
  let product = useRef()

  return <nav className="navbar navbar-expand-lg lower-navbar">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Shop Easy, Live Better!</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header upper-navbar">
          <h5 className="offcanvas-title " id="offcanvasNavbarLabel">
            <a className="navbar-brand" href="#">
              <img src={Logo} alt="Logo" className="d-inline-block align-text-top logo" />
            </a>
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">
            <li className="nav-item ">
              <a className="nav-link active" aria-current="page" href="#" onClick={() => { setSelectedTab("Home") }}>Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
              </a>
              <ul className="dropdown-menu scrollable-dropdown-menu">
                {categories.map((category) => (
                  <li key={category.title}>
                    <a
                      onClick={() => {
                        getProductList(category.title);
                        setSelectedTab("Specific Category");
                      }}
                      className="dropdown-item"
                      href="#">
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>

            </li>
          </ul>
          <form className="d-flex mt-3" role="search">
            <input ref={product} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit" onClick={() => {

              searchProduct(product.current.value)
              product.current.value = ""
              setSelectedTab("Specific Category")
            }}>Search</button>
          </form>
        </div>
      </div>
    </div>
  </nav>
}
export default LowerNavbar