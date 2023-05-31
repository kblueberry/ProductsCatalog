import { Link } from "react-router-dom";
import { ActionNames } from "../mock-tool/ConstantsConfig";

export default function BackButton() {
  return <>
    <Link to="/" className="link-offset-2 text-primary-emphasis">{ActionNames.backToList}</Link>
  </>
}