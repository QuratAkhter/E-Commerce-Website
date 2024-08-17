import pic1 from "../assets/pic1.jpg"
import pic2 from "../assets/pic2.jpg"
import pic4 from "../assets/pic4.jpg"
import pic5 from "../assets/pic5.png"
import pic6 from "../assets/pic6.jpg"
import pic7 from "../assets/pic7.jpg"
import pic8 from "../assets/pic8.jpg"
import pic9 from "../assets/pic9.png"
import pic10 from "../assets/pic10.jpg"
const Crousel = () => {
  return <div id="carouselExampleInterval" className="carousel slide p-5" data-bs-ride="carousel">
    <div className="carousel-inner shop-crousel">
      <div className="carousel-item active" data-bs-interval="10000">
        <img src={pic1} className="d-block w-100 shop-crousel" alt="..." />
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <img src={pic2} className="d-block w-100 shop-crousel" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={pic4} className="d-block w-100 shop-crousel" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={pic5} className="d-block w-100 shop-crousel" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={pic6} className="d-block w-100 shop-crousel" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={pic7} className="d-block w-100 shop-crousel" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={pic8} className="d-block w-100 shop-crousel" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={pic9} className="d-block w-100 shop-crousel" alt="..." />
      </div>
      <div className="carousel-item">
        <img src={pic10} className="d-block w-100 shop-crousel" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
}
export default Crousel