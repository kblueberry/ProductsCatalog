import { FormControls, LeaveReviewForm } from "../../../mock-tool/LeaveFeedbackFormControls";
import { Path, UseFormRegister } from "react-hook-form";

type InputProps = {
  label: Path<FormControls>;
  register: UseFormRegister<FormControls>;
  required: boolean;
}

export default function Input({ label, register, required }: InputProps) {
  switch (label) {
    case LeaveReviewForm.placeholders.name:
    case LeaveReviewForm.placeholders.email:
    case LeaveReviewForm.placeholders.phone:
      return <input {...register(label, { required })}
                    type={LeaveReviewForm.inputTypes.text}
                    className="form-control-custom w-100 p-2"
                    placeholder={label}></input>
    case LeaveReviewForm.placeholders.comment:
      return <textarea {...register(label)}
                       className="form-control-custom w-100 p-2"
                       placeholder={LeaveReviewForm.placeholders.comment}></textarea>
    default:
      return <input {...register(LeaveReviewForm.placeholders.saveDetails)}
                    type={LeaveReviewForm.inputTypes.checkBox}
                    className="form-check-input"
                    id="exampleCheck1">
      </input>
  }
}