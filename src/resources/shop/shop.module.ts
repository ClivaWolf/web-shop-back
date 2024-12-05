import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shop } from './entities/shop.entity';
import { Order } from '../order/entities/order.entity';

@Module({
  controllers: [ShopController],
  providers: [ShopService],
  imports: [
    TypeOrmModule.forFeature([Shop, Order]),
  ],
})
export class ShopModule { }
