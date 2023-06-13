export const LeaveReviewForm = {
  placeholders: {
    comment: "Comment",
    name: "Name",
    email: "Email",
    phone: "Phone (optional)"
  },
  saveDetails: "Save my name, email and website in this browser for the next time I comment",
  rateProduct: "Rate this product"
}

export enum LeaveFeedbackFormControls {
  Comment = "Comment",
  Name = "Name",
  Email = "Email",
  Phone = "Phone",
  Rate = "Rate",
  SaveDetails = "SaveDetails"
}

export enum LeaveFeedbackFormControlsTypes {
  Text = "text",
  Checkbox = "checkbox",
  Range = "range"
}

export const LeaveFeedbackControls = [
  { label: LeaveFeedbackFormControls.Name, required: true, containerClasses: "mb-3 me-3 flex-input-container" },
  { label: LeaveFeedbackFormControls.Email, required: true, containerClasses: "mb-3 flex-input-container" },
  { label: LeaveFeedbackFormControls.Phone, required: false, containerClasses: "mb-3 w-100" }
]