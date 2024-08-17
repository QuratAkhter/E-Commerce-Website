import { useContext } from "react";
import Logo from "./Logo.png"
import { MdShoppingCart } from "react-icons/md";
import { CartList } from "../store/cart-store";


const UpperNavbar = ({ setSelectedTab }) => {
  let { cartList } = useContext(CartList)

  return <nav className="navbar upper-navbar">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src={Logo} alt="Logo" className="d-inline-block align-text-top logo" />
      </a>
      <a className="navbar-brand" href="#" onClick={() => { setSelectedTab("Cart") }}>
        <div className="position-relative">
          <MdShoppingCart className="text-light" size={40} />
          {cartList.length !== 0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" size={5}>
            {cartList.length}
            <span className="visually-hidden">unread messages</span>
          </span>}

        </div>
      </a>

    </div>
  </nav>
}
export default UpperNavbar