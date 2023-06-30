import "./UiListItemImage.scss";

export default function UiListItemImage({
  imageSrc,
  imageAlt,
  className = "",
}: {
  imageSrc: string;
  imageAlt: string;
  className?: string;
}) {
  return (
    <img
      className={`image-container py-3 ${className}`}
      src={imageSrc}
      alt={imageAlt}
    ></img>
  );
}
