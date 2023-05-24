export interface Product {
  id: number;
  discountId?: number;
  name: string;
  price: number;
  taxPercentage: number;
  quantity: number;
  description: string;
  photoUrlSmall: string;
  photoUrlMedium: string;
  photoUrlBig: string;
  amount: string;
  weight: number;
  height: number;
  categories: string[];
}
