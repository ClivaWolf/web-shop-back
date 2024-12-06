import { Delivery } from 'src/resources/delivery/entities/delivery.entity';
import { Product } from 'src/resources/product/entities/product.entity';
import { Shop } from 'src/resources/shop/entities/shop.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne, CreateDateColumn } from 'typeorm';


@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    code: string;

    @ManyToOne(() => Shop, (shop) => shop.orders, { nullable: true })
    shop: Shop;

    @ManyToOne(() => Product, (product) => product.orders, { nullable: true })
    product: Product;

    @CreateDateColumn()
    order_date: Date;

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