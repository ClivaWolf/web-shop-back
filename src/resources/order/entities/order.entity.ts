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
    order_tate: Date;

    @Column()
    order_time: Date;

    @Column()
    quantity: number;

    @Column()
    customer_name: string;

    @Column()
    customer_phone: string;

    @Column()
    confirmed: boolean;

    @OneToOne(() => Delivery, (delivery) => delivery.order, { nullable: true })
    delivery: Delivery;
}