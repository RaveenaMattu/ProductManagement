export interface ProductInterface {
  id: number;
  name: string;
  price: number;
  image: string;
  condition: 'New' | 'Used' | 'Refurbished';
}