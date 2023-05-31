import './ProductWidget.scss';
import ProductAction from "./ProductAction";
import { Link } from "react-router-dom";
import { ActionNames } from "../mock-tool/ConstantsConfig";
import { ProductItem } from "../mock-tool/Product";

export default function ProductWidget({ item }: { item: ProductItem }) {
  return <div className="widget">
    <p className="link_to_details">
      <Link className="link-offset-2 fs-3 text-start link-underline-light text-light"
            to={`/product/${item.id}/reviews`}>
          {ActionNames.goToDetails}
      </Link>
    </p>
    <img className="w-100 h-100 py-3 product-image"
         src={item.productView}
         alt={item.productName}>
    </img>
    <ProductAction actionName={ActionNames.likeAction}/>
    <div className="d-flex flex-column w-100 mb-2">
      <div className="d-flex flex-row flex-wrap justify-content-between">
        <ProductDetails value={item.productName}
                        isAvailable={false}
                        setClass="flex-grow-1 flex-shrink-1"/>
        <ProductDetails value={item.priceLevel}
                        isAvailable={false}
                        setClass="flex-grow-0 flex-shrink-0 ml-auto"/>
      </div>
      <ProductDetails value={item.productBrand}
                      isAvailable={false}
                      setClass="details_label_medium"/>
      <div className="d-flex flex-row flex-wrap justify-content-between">
        <ProductDetails value={item.availabilityQmCount}
                        isAvailable={true}
                        setClass="detail_label_small"/>
        <ProductAction actionName={ActionNames.compareProduct}/>
      </div>
    </div>
  </div>
}

export function ProductDetails({
                                 value,
                                 isAvailable,
                                 setClass
                               }: { value: string | number, isAvailable: boolean, setClass: string }) {
  const preString = isAvailable ? 'Available, qm' : '';

  if (!preString) {
    return <span className={setClass}>
      {value}
    </span>
  }
  return <div style={{
    flex: '1 0 178px'
  }} className={setClass}>
    <div className="d-flex flex-row align-items-center justify-between-content">
      <div className="available_count_marker rounded-circle bg-success"></div>
      <span className="p-1">
        {preString}
      </span>
      <span>{value}</span>
    </div>
  </div>
}