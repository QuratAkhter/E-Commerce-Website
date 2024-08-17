import Ratings from "./Ratings"

const Review = ({ reviews }) => {

    return (
        <div className="my-3 p-3 bg-body rounded shadow-sm mt-5">
            <h6 className="border-bottom pb-2 mb-0">Reviews</h6>
            {reviews.map((review, index) => {
                let datetime = "2024-05-23T08:56:21.623Z";

                // Split into date and time
                let [date, time] = datetime.split("T");

                // Remove milliseconds and 'Z' from time
                time = time.split(".")[0];

                return (
                    <div key={index} className="d-flex text-body-secondary pt-3">
                        <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#00a8a8"></rect>
                            <text x="50%" y="50%" fill="#00a8a8" dy=".3em">32x32</text>
                        </svg>
                        <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                            <strong className="d-block text-gray-dark">{review.reviewerName}</strong>
                            <span>{review.reviewerEmail}</span>
                            <div className="text-dark p-3 mt-2 text-bg-light w-100 position-relative">
                                <p>{review.comment}</p>
                                <div className="fw-semibold align-items-center pt-1 fs-6">
                                    <span className="m-0 d-inline">{review.rating}</span> <Ratings ratings={review.rating} size={10} />
                                </div>
                                <span className="position-absolute bottom-0 end-0 m-1 small date-time">{date} | {time}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Review;
