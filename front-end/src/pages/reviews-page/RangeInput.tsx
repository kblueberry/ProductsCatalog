import { UseFormRegister } from "react-hook-form";
import { FormControls, LeaveReviewForm } from "../../../mock-tool/LeaveFeedbackFormControls";
import { ComponentConstants } from "../../../mock-tool/ConstantsConfig";

export default function RangeInput({ register }: { register: UseFormRegister<FormControls> }) {
  return <div className="mb-3">
    <label htmlFor="customRange1" className="form-label">
      {LeaveReviewForm.labels.rateProduct}
    </label>
    <div className="w-50">
      <input {...register(LeaveReviewForm.placeholders.rate)}
             type={LeaveReviewForm.inputTypes.range}
             list="rate_values"
             min="1" max="5"
             className="form-range range-track-custom"
             id="customRange1"/>
      <datalist id="rate_values" className="w-100 d-flex flex-row justify-content-between">
        {[...Array(ComponentConstants.productMaxRating).keys()].map((el) => (
            <option key={el} value={el + 1} label={el + 1}/>
        ))}
      </datalist>
    </div>
  </div>
}