import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from './order.model';

@Injectable()
export class OrdersService {
  private orders: Order[] = [];

  createOrder(order: Order) {
    const newOrder = { ...order, id: Date.now().toString() };
    this.orders.push(newOrder);
    return newOrder;
  }

  getAllOrders() {
    return this.orders;
  }

  getOrderById(id: string) {
    const order = this.orders.find((o) => o.id === id);
    if (!order) throw new NotFoundException('Order not found');
    return order;
  }

  updateOrder(id: string, updatedOrder: Partial<Order>) {
    const index = this.orders.findIndex((o) => o.id === id);
    if (index === -1) throw new NotFoundException('Order not found');

    const updatedEntity = { ...this.orders[index], ...updatedOrder };
    this.orders[index] = updatedEntity;
    return updatedEntity;
  }

  deleteOrder(id: string) {
    const index = this.orders.findIndex((o) => o.id === id);
    if (index === -1) throw new NotFoundException('Order not found');
    return this.orders.splice(index, 1);
  }
}
