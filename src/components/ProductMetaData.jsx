import { FaRecycle } from "react-icons/fa6";
import { FaShield } from "react-icons/fa6";
import { LiaShippingFastSolid } from "react-icons/lia";

const ProductMetaData = ({ dimensions, returnPolicy, warrantyInformation, shippingInformation, qrCode }) => {
    return (
        <>
            <div className="pt-3">
                <div className="mx-5">
                    <strong>Dimensions</strong>
                    <div className="lh-1 px-5"><span>Width: </span>{dimensions.width}</div>
                    <div className="lh-1 px-5"><span>Height: </span>{dimensions.height}</div>
                    <div className="lh-1 px-5"><span>Depth: </span>{dimensions.depth}</div>
                </div>
            </div>
            <div className="my-5 lh-sm text-body-secondary mx-5">
                <p><FaRecycle className="text-dark" /> {returnPolicy}</p>
                <p><FaShield className="text-dark" /> {warrantyInformation}</p>
                <p><LiaShippingFastSolid className="text-dark" /> {shippingInformation}</p>
            </div>
            <p className="card-text mx-5">
                <small className="text-body-secondary">Scan QR code from your mobile now</small>
            </p>
            <img className="mx-5" src={qrCode} alt="QR code" />
        </>
    );
}

export default ProductMetaData;
