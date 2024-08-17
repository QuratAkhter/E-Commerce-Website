import { useContext } from "react";
import { ProductList } from "../store/main-store";
import { motion } from "framer-motion";

const Category = ({ categ, setSelectedTab }) => {
  const { getProductList } = useContext(ProductList);

  const handleClick = () => {
    if (getProductList) {
      getProductList(categ.title);
      setSelectedTab("Specific Category");
    }
  };

  return (
    <div
      className="col categ-card"
      onClick={handleClick}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }} // Add transition for smoother animation
        className="card categ-card text-bg-dark"
      >
        <img
          src={categ.img}
          className="card-img category"
          alt={categ.name} // Use category name for alt text
        />
        <div className="card-img-overlay">
          <span className="badge rounded-pill px-5 category-tag">
            <h5 className="card-title">{categ.name}</h5>
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Category;
