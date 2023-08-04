export interface PageObject<T> {
  data: Array<T>;
  limit: number;
  total: number;
  currentPage: number;
}
