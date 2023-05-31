import FeedbackForm from "./FeedbackForm";

export default function LeaveReview({productId}: {productId: number}) {
  return <div className="my-5">
    <h3 className="fs-3">Leave a review</h3>
    <FeedbackForm productId={productId}/>
  </div>
}