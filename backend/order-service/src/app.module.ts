import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [OrdersModule, HttpModule],
})
export class AppModule {}
