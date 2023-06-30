import "./UiListItemImage.scss";
import Like from "./ui-buttons/Like";
import { ProductItem } from "../../mock-tool/Product";

type ImageProps = {
  product: ProductItem;
  wishListAction?: boolean;
  className?: string;
};

export default function UiListItemImage({
  product,
  wishListAction = false,
  className = "",
}: ImageProps) {
  return (
    <>
      <img
        className={`image-container py-3 ${className}`}
        src={product.productView}
        alt={product.productName}
      ></img>
      {wishListAction && <Like item={product} />}
    </>
  );
}
