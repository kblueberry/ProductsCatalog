export class Review {
  constructor(author: string, rate: number, comment: string, productId: number) {
    this.author = author;
    this.rate = rate;
    this.comment = comment;
    this.productId = productId;
  }
  id: number;
  author: string;
  date: string = new Date().toDateString();
  rate: number;
  comment: string;
  productId: number;
}
