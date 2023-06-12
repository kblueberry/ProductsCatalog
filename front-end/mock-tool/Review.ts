export class Review {
  constructor(author: string, rate: number, comment: string, productId: number) {
    this.author = author;
    this.rate = rate;
    this.comment = comment;
    this.productId = productId;
  }
  _id: number;
  author: string;
  date: Date;
  rate: number;
  comment: string;
  productId: number;
}
