import { Link } from "react-router-dom";

type UILinkProps = {
  pageLink: string;
  fontStyles: number;
  actionName: string;
};

enum FontStyles {
  Small = 1,
  Medium,
  Large,
}

export default function UILink({
  pageLink,
  fontStyles,
  actionName,
}: UILinkProps) {
  return (
    <Link to={pageLink} className={"link-offset-2" + fontStyles}>
      {actionName}
    </Link>
  );
}
