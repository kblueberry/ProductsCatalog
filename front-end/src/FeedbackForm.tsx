import { useState } from "react";
import { useForm, UseFormRegister, Path, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import "./FeedbackForm.scss";
import { ActionNames, ComponentConstants, LeaveReviewForm } from "../mock-tool/ConstantsConfig";
import { Review } from "../mock-tool/Review";

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
  placeholder: string;
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

    fetch(`http://localhost:3000/reviews`, {
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
      <textarea {...register("comment")}
                className="form-control-custom w-100 p-2"
                placeholder={LeaveReviewForm.placeholders.comment}></textarea>
      {errors.comment && <p className="text-danger">{errors.comment.message}</p>}
    </div>
    <div className="mb-3 d-flex justify-content-lg-between">
      <div className="me-3 flex-md-fill">
        <Input type="text"
               label="name"
               placeholder={LeaveReviewForm.placeholders.name}
               register={register}
               required={true}/>
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>

      <div className="flex-md-fill">
        <Input type="text"
               label="email"
               placeholder={LeaveReviewForm.placeholders.email}
               register={register}
               required={true}/>
        {errors.email && <p className="text-danger">{errors.email.message}</p>}
      </div>
    </div>
    <div className="mb-3">
      <Input type="text"
             label="phone"
             placeholder={LeaveReviewForm.placeholders.phone}
             register={register}
             required={false}/>
    </div>
    <div className="mb-3">
      <label htmlFor="customRange1" className="form-label">
        {LeaveReviewForm.rateProduct}
      </label>
      <div className="w-50">
        <input {...register("rate")}
               type="range"
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
    <div className="mb-3">
      <input {...register("saveDetails")}
             type="checkbox"
             className="form-check-input"
             id="exampleCheck1">
      </input>
      <label className="form-check-label ml-2" htmlFor="exampleCheck1">
        {LeaveReviewForm.saveDetails}
      </label>
    </div>
    {!isPending ? <button type="submit" className="btn-lg fs-5 rounded-pill w-25 submit-action">
      {ActionNames.postReview}
    </button> : <button className="btn-lg fs-5 rounded-pill w-25 submit-action" disabled>
      {ActionNames.postingReviewInPending}
    </button>}
  </form>
}

function Input({ label, placeholder, register, required }: InputProps) {
  return <input {...register(label, { required })}
                type="text"
                className="form-control-custom w-100 p-2"
                placeholder={placeholder}></input>

}