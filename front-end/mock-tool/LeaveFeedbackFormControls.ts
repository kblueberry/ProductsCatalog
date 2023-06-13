export const LeaveReviewForm = {
  placeholders: {
    comment: "comment",
    name: "name",
    email: "email",
    phone: "phone",
    rate: "rate",
    saveDetails: "saveDetails"
  },
  inputTypes: {
    text: "text",
    checkBox: "checkbox",
    range: "range"
  },
  labels: {
    saveDetails: "Save my name, email and website in this browser for the next time I comment",
    rateProduct: "Rate this product"
  }
}

export const LeaveReviewFormControls = [
  { label: LeaveReviewForm.placeholders.name, required: true, containerClasses: "mb-3 me-3 flex-input-container" },
  { label: LeaveReviewForm.placeholders.email, required: true, containerClasses: "mb-3 flex-input-container" },
  { label: LeaveReviewForm.placeholders.phone, required: false, containerClasses: "mb-3 w-100" }
]

export type FormControls = {
  comment: string;
  name: string;
  email: string;
  phone: string;
  rate: number;
  saveDetails: boolean;
}