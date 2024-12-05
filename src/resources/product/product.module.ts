import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shop } from '../shop/entities/shop.entity';
import { Product } from './entities/product.entity';
import { Order } from '../order/entities/order.entity';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [
    TypeOrmModule.forFeature([Shop, Product, Order]),
  ],
})
export class ProductModule {}
