import "./AppActions.scss";
import { ActionNames } from "../../mock-tool/ConstantsConfig";
import { Link } from "react-router-dom";
import { useState } from "react";

export function CheckBoxAction() {
  return (
    <div className="form-check form-check-reverse">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="reverseCheck1"
      ></input>
      <label
        className="form-check-label detail_label_small"
        htmlFor="reverseCheck1"
      >
        {ActionNames.compareProduct}
      </label>
    </div>
  );
}

export function Like() {
  const [addedToWishlist, setAddedToWishlist] = useState<boolean>(false);

  return (
    <div
      className="placement"
      onClick={() => setAddedToWishlist(!addedToWishlist)}
    >
      <div className="heart">
        <svg
          className={
            addedToWishlist ? "added_to_wishlist" : "not_added_to_wishlist"
          }
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>heart</title>
            <path d="M0.256 12.16q0.544 2.080 2.080 3.616l13.664 14.144 13.664-14.144q1.536-1.536 2.080-3.616t0-4.128-2.080-3.584-3.584-2.080-4.16 0-3.584 2.080l-2.336 2.816-2.336-2.816q-1.536-1.536-3.584-2.080t-4.128 0-3.616 2.080-2.080 3.584 0 4.128z"></path>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function ToggleButton({
  isToggled,
  actionName,
}: {
  isToggled: any;
  actionName: string;
}) {
  let classNames = "btn text-decoration-underline text-uppercase fw-bold p-0 ";
  classNames +=
    actionName === ActionNames.readAllReviews
      ? "load_more_medium"
      : "load_more_small";

  return (
    <button className={classNames} onClick={() => isToggled()}>
      {actionName}
    </button>
  );
}

export function LinkButton({ linkTo }: { linkTo: string }) {
  const extractPath = (link: string) => {
    return link.slice(link.lastIndexOf("/") + 1, link.length);
  };

  const actionName =
    linkTo === "/"
      ? ActionNames.linkTo + "products"
      : ActionNames.linkTo + extractPath(linkTo);

  return (
    <>
      <Link
        to={linkTo}
        className={
          linkTo === "/"
            ? "link-offset-2 text-primary-emphasis"
            : "link-offset-2 fs-3 ink-underline-light text-light"
        }
      >
        {actionName}
      </Link>
    </>
  );
}

export function SubmitForm({ isPending }: { isPending: boolean }) {
  if (!isPending) {
    return (
      <button
        type="submit"
        className="btn-lg fs-5 rounded-pill w-25 submit-action"
      >
        {ActionNames.postReview}
      </button>
    );
  }
  return (
    <button
      type="submit"
      className="btn-lg fs-5 rounded-pill w-25 submit-action"
      disabled
    >
      {ActionNames.postingReviewInPending}
    </button>
  );
}
