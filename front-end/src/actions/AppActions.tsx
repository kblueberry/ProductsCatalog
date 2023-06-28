import "./AppActions.scss";
import { ActionNames } from "../../mock-tool/ConstantsConfig";
import { Link } from "react-router-dom";
import { ProductItem } from "../../mock-tool/Product";
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
