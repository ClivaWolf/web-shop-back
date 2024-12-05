import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UsersModule } from './resources/users/users.module';!!!!!!!!!!!!!!!!!!!!
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database.module';
import { TypeOrmConfig } from './type-orm.config';
import { ShopModule } from 'src/resources/shop/shop.module';
import { ProductModule } from 'src/resources/product/product.module';
import { DeliveryModule } from 'src/resources/delivery/delivery.module';
import { OrderModule } from 'src/resources/order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule, DatabaseModule], // Указываем DatabaseModule в imports
      useFactory: async (configService: ConfigService, typeOrmConfig: TypeOrmConfig) => {
        return typeOrmConfig.createConnectionOptions();
      },
      inject: [ConfigService, TypeOrmConfig],
    }),
    ShopModule,
    ProductModule,
    DeliveryModule,
    OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
