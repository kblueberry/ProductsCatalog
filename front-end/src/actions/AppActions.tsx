import "./AppActions.scss";
import { ActionNames } from "../../mock-tool/ConstantsConfig";

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
