export interface ProductItem {
  _id: number;
  productView: string;
  productName: string;
  productBrand: string;
  availabilityQmCount: number;
  inWishList: boolean;
  inCart: boolean;
  price: number;
}

export class WishlistItem {
  _id: number;
  productView: string;
  productName: string;
  price: number;
  inCart: boolean;
}
