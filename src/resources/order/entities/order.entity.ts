import { Delivery } from 'src/resources/delivery/entities/delivery.entity';
import { Product } from 'src/resources/product/entities/product.entity';
import { Shop } from 'src/resources/shop/entities/shop.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne } from 'typeorm';


@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Shop, (shop) => shop.orders)
    shop: Shop;

    @ManyToOne(() => Product, (product) => product.orders)
    product: Product;

    @Column()
    orderDate: Date;

    @Column()
    orderTime: Date;

    @Column()
    quantity: number;

    @Column()
    customerName: string;

    @Column()
    customerPhone: string;

    @Column()
    confirmed: boolean;

    @OneToOne(() => Delivery, (delivery) => delivery.order, { nullable: true })
    delivery: Delivery;
}