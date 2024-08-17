import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
const Ratings = ({ ratings, size }) => {
    let count = ratings
    let ratingArr = []
    for (let i = 0; i < 5; i++) {
        if (count > 1) {
            ratingArr.push(1)
            count = count - 1
        }
        else if (count > 0 && count < 1) {
            ratingArr.push(0.5)
            count = count - 1
        }
        else {
            ratingArr.push(0)
        }
    }

    return <>
        {ratingArr.map((rate, index) => {
            if (rate === 1) {
                return <BsStarFill key={index} className="text-warning" size={size} />
            }
            else if (rate === 0.5) {
                return <BsStarHalf key={index} className="text-warning" size={size} />
            }
            else {
                return <BsStar key={index} className="text-warning" size={size} />
            }
        })}
    </>
}
export default Ratings