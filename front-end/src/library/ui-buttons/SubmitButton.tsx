import { ActionNames } from "../../../mock-tool/ConstantsConfig";
import "./SubmitButton.scss";

export default function SubmitButton({ isPending }: { isPending: boolean }) {
  return (
    <button
      type="submit"
      className="btn-lg fs-5 rounded-pill w-25 submit-action"
      disabled={isPending}
    >
      {!isPending ? ActionNames.postReview : ActionNames.postingReviewInPending}
    </button>
  );
}
