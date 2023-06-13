import { useState } from "react";
import { Path, SubmitHandler, useForm, UseFormRegister } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import "./FeedbackForm.scss";
import { ComponentConstants } from "../../../mock-tool/ConstantsConfig";
import { Review } from "../../../mock-tool/Review";
import { SubmitForm } from "../../actions/AppActions";
import {
  LeaveFeedbackControls,
  LeaveFeedbackFormControls,
  LeaveFeedbackFormControlsTypes,
  LeaveReviewForm
} from "../../../mock-tool/LeaveFeedbackFormControls";

const schema = yup.object({
  comment: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string(),
  rate: yup.number().required(),
  saveDetails: yup.boolean()
}).required();

type FormControls = {
  comment: string;
  name: string;
  email: string;
  phone: string;
  rate: number;
  saveDetails: boolean;
}

type InputProps = {
  label: Path<FormControls>;
  register: UseFormRegister<FormControls>;
  required: boolean;
}

export default function FeedbackForm({ productId }: { productId: number }) {
  const [isPending, setIsPending] = useState<boolean>(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormControls>({
    resolver: yupResolver(schema)
  });
  const postReview: SubmitHandler<FormControls> = data => {
    const review = new Review(data.name, data.rate, data.comment, productId);
    setIsPending(true);

    fetch(`http://localhost:3000/reviews/${productId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(review)
    })
        .then(() => {
          setIsPending(false);
        })
        .catch(() => console.error('An error occurred, please try a bit later'))
  };

  return <form className="my-3 needs-validation"
               onSubmit={handleSubmit(postReview)}>
    <div className="mb-3">
      <Input label={LeaveFeedbackFormControls.Comment} register={register} required={true}></Input>
      {errors.comment && <p className="text-danger">{errors.comment.message}</p>}
    </div>
    <div className="mb-3 d-flex justify-content-lg-between flex-wrap">
      {LeaveFeedbackControls.map((control) => (
          <div className={control.containerClasses}>
            <Input label={control.label} register={register} required={control.required}></Input>
            {errors.name
                && control.label !== LeaveFeedbackFormControls.Phone
                && <p className="text-danger">{errors.name.message}</p>}
          </div>
      ))}
    </div>
    <RangeInput register={register}/>
    <div className="mb-3">
      <Input label={LeaveFeedbackFormControls.SaveDetails} register={register} required={false}></Input>
      <label className="form-check-label ml-2" htmlFor="exampleCheck1">
        {LeaveReviewForm.saveDetails}
      </label>
    </div>
    <SubmitForm isPending={isPending}/>
  </form>
}

function Input({ label, register, required }: InputProps) {
  switch (label) {
    case LeaveFeedbackFormControls.Name:
    case LeaveFeedbackFormControls.Email:
    case LeaveFeedbackFormControls.Phone:
      return <input {...register(label, { required })}
                    type="text"
                    className="form-control-custom w-100 p-2"
                    placeholder={label}></input>
    case LeaveFeedbackFormControls.Comment:
      return <textarea {...register(label)}
                       className="form-control-custom w-100 p-2"
                       placeholder={LeaveFeedbackFormControls.Comment}></textarea>
    default:
      return <input {...register(LeaveFeedbackFormControls.SaveDetails)}
                    type={LeaveFeedbackFormControlsTypes.Checkbox}
                    className="form-check-input"
                    id="exampleCheck1">
      </input>
  }
}

function RangeInput({ register }: { register: UseFormRegister<FormControls> }) {
  return <div className="mb-3">
    <label htmlFor="customRange1" className="form-label">
      {LeaveReviewForm.rateProduct}
    </label>
    <div className="w-50">
      <input {...register(LeaveFeedbackFormControls.Rate)}
             type={LeaveFeedbackFormControlsTypes.Range}
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