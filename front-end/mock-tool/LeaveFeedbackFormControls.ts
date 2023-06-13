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
  Comment = "comment",
  Name = "name",
  Email = "email",
  Phone = "phone",
  Rate = "rate",
  SaveDetails = "saveDetails"
}

export enum LeaveFeedbackFormControlsTypes {
  Text = "text",
  Checkbox = "checkbox",
  Range = "range"
}