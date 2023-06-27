export default function UiListItemImage({
  imageSrc,
  imageAlt,
}: {
  imageSrc: string;
  imageAlt: string;
}) {
  return <img className="w-100 h-100 py-3" src={imageSrc} alt={imageAlt}></img>;
}
