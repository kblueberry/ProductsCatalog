import { useState } from "react";
import "./Feedback.scss";
import { Review } from "../mock-tool/Review";
import { ActionNames, ComponentConstants } from "../mock-tool/ConstantsConfig";

export default function Feedback({ review }: { review: Review }) {
  const [actionName, setActionName] = useState<string>(ActionNames.showFullText);
  const [commentSize, setCommentSize] = useState<number>(ComponentConstants.initialCommentSize);

  const toggleHeight = () => {
    if (commentSize < review.comment.length) {
      setActionName(ActionNames.showLess);
      setCommentSize(review.comment.length);
    } else {
      setActionName(ActionNames.showFullText);
      setCommentSize(ComponentConstants.initialCommentSize);
    }
  };

  return <div className="my-3 feedback">
    <div>
      <h5 className="fs-5">{review.author}</h5>
      <p className="text-secondary feedback-date">{review.date}</p>
      <div className="d-flex">
        {[...Array(ComponentConstants.productMaxRating).keys()].map((el, i) => (
            <Star key={i} cssClass={i + 1 <= review.rate ? 'rated' : 'unrated'}/>
        ))}
      </div>
      <div className="fs-6 pt-3 mb-1">
        {review.comment.slice(0, commentSize)}
      </div>
      {review.comment.length >= ComponentConstants.initialCommentSize
          && <Action actionName={actionName} isToggled={toggleHeight}/>}
    </div>
    <div className="underline"></div>
  </div>
}


export function Star({ cssClass }: { cssClass: string }) {
  return <svg className="pe-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path className={cssClass}
          d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
  </svg>
}

export function Action({ actionName, isToggled }: { actionName: string, isToggled: any }) {
  let classNames = 'btn text-decoration-underline text-uppercase fw-bold p-0 ';
  classNames += actionName === ActionNames.readAllReviews ? 'load_more_medium' : 'load_more_small';

  return <button className={classNames}
                 onClick={() => isToggled()}>{actionName}</button>
}