import "./AppActions.scss";
import { ActionNames } from "../../mock-tool/ConstantsConfig";
import { Link } from "react-router-dom";

export function CheckBoxAction() {
  return <div className="form-check form-check-reverse">
    <input className="form-check-input" type="checkbox" value="" id="reverseCheck1"></input>
    <label className="form-check-label detail_label_small" htmlFor="reverseCheck1">
      {ActionNames.compareProduct}
    </label>
  </div>
}

export function Like() {
  return <div className="placement">
    <div className="heart">
      <svg color="red" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
        <path
            d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/>
      </svg>
    </div>
  </div>
}

export function ToggleButton({ isToggled, actionName }: { isToggled: any, actionName: string }) {
  let classNames = 'btn text-decoration-underline text-uppercase fw-bold p-0 ';
  classNames += actionName === ActionNames.readAllReviews ? 'load_more_medium' : 'load_more_small';

  return <button className={classNames}
                 onClick={() => isToggled()}>{actionName}</button>
}

export function LinkButton({ linkTo }: { linkTo: string }) {
  const extractPath = (link: string) => {
    return link.slice(link.lastIndexOf('/') + 1, link.length)
  }
  const actionName = linkTo === '/' ? ActionNames.linkTo + 'products' : ActionNames.linkTo + extractPath(linkTo);

  return <>
    <Link to={linkTo}
          className={linkTo === '/' ?
              "link-offset-2 text-primary-emphasis" : "link-offset-2 fs-3 text-start link-underline-light text-light"}>
       {actionName}
    </Link>
  </>
}

export function SubmitForm({ isPending }: { isPending: boolean }) {
  if (!isPending) {
    return <button type="submit" className="btn-lg fs-5 rounded-pill w-25 submit-action">
      {ActionNames.postReview}
    </button>
  }
  return <button type="submit" className="btn-lg fs-5 rounded-pill w-25 submit-action" disabled>
    {ActionNames.postingReviewInPending}
  </button>
}