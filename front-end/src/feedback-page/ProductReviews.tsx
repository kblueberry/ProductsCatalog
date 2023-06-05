import Feedback from "./Feedback";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LeaveReview from "./LeaveReview";
import { ActionNames, ComponentConstants } from "../../mock-tool/ConstantsConfig";
import { Review } from "../../mock-tool/Review";
import { LinkButton, ToggleButton } from "../actions/AppActions";

export default function ProductReviews() {
  const [next, setNext] = useState<number>(ComponentConstants.initialFeedbacksCount);
  const [actionName, setActionName] = useState<string>(ActionNames.readAllReviews);
  const [productReviews, setProductReviews] = useState<Array<Review>>([]);
  const { id } = useParams();

  const toggleReviewsCount = () => {
    if (next < productReviews.length) {
      setNext(productReviews.length);
      setActionName(ActionNames.showLess);
    } else {
      setNext(ComponentConstants.initialFeedbacksCount);
      setActionName(ActionNames.readAllReviews);
    }
  };

  const fetchProductInfo = () => {
    fetch(`http://localhost:3000/reviews?productId=${id}`)
        .then(res => res.json())
        .then((reviews: Array<Review>) => {
          setProductReviews(reviews);
        })
  }

  useEffect(() => {
    fetchProductInfo()
  }, []);

  return <div className="mx-auto mt-5 mb-2 w-75">
    <LinkButton linkTo='/' />
    {productReviews.slice(0, next).map((review) => (
        <Feedback key={review.id} review={review}/>
    ))}

    <ToggleButton isToggled={toggleReviewsCount} actionName={actionName}/>
    <LeaveReview productId={id}/>
  </div>
}