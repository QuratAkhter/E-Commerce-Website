
import { FaCartPlus } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return <div className="container">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">

          <FaCartPlus width="200px" height="50px" />
        </a>
        <span className="mb-3 mb-md-0 text-body-secondary"><font style={{ verticalAlign: 'inherit', color: 'inherit' }}><font style={{ verticalAlign: 'inherit', color: 'inherit' }}>© 2024 Company, Inc</font></font></span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><a className="text-body-secondary"  href="https://www.instagram.com/quratulain_akhter/?next=%2F"><FaSquareInstagram />
        </a></li>
        <li className="ms-3"><a className="text-body-secondary"  href="https://www.facebook.com/profile.php?id=100087388433668"><IoLogoFacebook />
        </a></li>
        <li className="ms-3"><a className="text-body-secondary"  href="https:/linkedin.com/in/qurat-ul-ain-akhter-888901262"><FaLinkedin />
        </a></li>
      </ul>
    </footer>
  </div>
}
export default Footer