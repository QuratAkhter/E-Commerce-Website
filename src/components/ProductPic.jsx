import { useState } from "react"

const ProductPic = ({ thumbnail, images }) => {
    const [mainImage, setMainImage] = useState(thumbnail)

    const changeImage = (img) => {
        setMainImage(img)
    }

    return (
        <>
            <img src={mainImage} className="img-fluid rounded-start m-auto" alt="Product" />
            <div className="d-flex mt-4">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        style={{ maxWidth: '25%' }}
                        className="img-fluid rounded-start border border-info-subtle categ-card"
                        onClick={() => changeImage(image)}
                        alt="Thumbnail"
                    />
                ))}
            </div>
        </>
    )
}

export default ProductPic
