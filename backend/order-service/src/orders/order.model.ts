export class Order {
  id: string;
  productId: string;
  quantity: number;
  totalPrice: number;
  status: 'pending' | 'completed';
}
