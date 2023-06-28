import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { LinkButtonStyles } from "../../mock-tool/LinkButtonStyles";

type UILinkProps = {
  pageLink: string;
  fontStyles: number;
  children: ReactNode;
};

export default function UILink({
  pageLink,
  fontStyles,
  children,
}: UILinkProps) {
  const setLinkStyles = () => {
    switch (fontStyles) {
      case LinkButtonStyles.ImageCoverLink:
        return "fs-3 text-light";
      case LinkButtonStyles.BreadcrumbLink:
        return "text-primary-emphasis";
      default:
        return "";
    }
  };

  return (
    <Link to={pageLink} className={"link-offset-2 " + setLinkStyles()}>
      {children}
    </Link>
  );
}
