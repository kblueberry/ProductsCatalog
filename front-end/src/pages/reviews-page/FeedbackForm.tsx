import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./FeedbackForm.scss";
import { Review } from "../../../mock-tool/Review";
import {
  FormControls,
  LeaveReviewForm,
  LeaveReviewFormControls,
} from "../../../mock-tool/LeaveFeedbackFormControls";
import RangeInput from "./RangeInput";
import Input from "./Input";
import SubmitButton from "../../library/ui-buttons/SubmitButton";

const schema = yup
  .object({
    comment: yup.string().required(),
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string(),
    rate: yup.number().required(),
    saveDetails: yup.boolean(),
  })
  .required();

export default function FeedbackForm({ productId }: { productId: number }) {
  const [isPending, setIsPending] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormControls>({
    resolver: yupResolver(schema),
  });

  const postReview: SubmitHandler<FormControls> = (data) => {
    const review = new Review(data.name, data.rate, data.comment, productId);
    setIsPending(true);

    fetch(`http://localhost:3000/reviews/${productId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    })
      .then(() => {
        setIsPending(false);
      })
      .catch(() => console.error("An error occurred, please try a bit later"));
  };

  return (
    <form className="my-3 needs-validation" onSubmit={handleSubmit(postReview)}>
      <div className="mb-3">
        <Input
          label={LeaveReviewForm.placeholders.comment}
          register={register}
          required={true}
        ></Input>
        {errors.comment && (
          <p className="text-danger">{errors.comment.message}</p>
        )}
      </div>
      <div className="mb-3 d-flex justify-content-lg-between flex-wrap">
        {LeaveReviewFormControls.map((control) => (
          <div className={control.containerClasses}>
            <Input
              label={control.label}
              register={register}
              required={control.required}
            ></Input>
            {errors.name &&
              control.label !== LeaveReviewForm.placeholders.phone && (
                <p className="text-danger">{errors.name.message}</p>
              )}
          </div>
        ))}
      </div>
      <RangeInput register={register} />
      <div className="mb-3">
        <Input
          label={LeaveReviewForm.placeholders.saveDetails}
          register={register}
          required={false}
        ></Input>
        <label className="form-check-label ml-2" htmlFor="exampleCheck1">
          {LeaveReviewForm.labels.saveDetails}
        </label>
      </div>
      <SubmitButton isPending={isPending} />
    </form>
  );
}
