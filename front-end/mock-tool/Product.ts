export interface ProductItem {
  _id: number;
  productView: string;
  productName: string;
  priceLevel: string;
  productBrand: string;
  availabilityQmCount: number;
  inWishlist: boolean;
}

export class WishlistItem {
  _id: number;
  productView: string;
  productName: string;
  price: number;
  inCart: boolean;
}
