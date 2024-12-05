import { Module } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { DeliveryController } from './delivery.controller';
import { Delivery } from './entities/delivery.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from '../order/entities/order.entity';

@Module({
  controllers: [DeliveryController],
  providers: [DeliveryService],
  imports: [
    TypeOrmModule.forFeature([Delivery, Order]),
  ],
})
export class DeliveryModule { }
