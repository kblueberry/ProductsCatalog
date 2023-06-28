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
