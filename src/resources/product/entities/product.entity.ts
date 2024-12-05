import { Order } from 'src/resources/order/entities/order.entity';
import { Shop } from 'src/resources/shop/entities/shop.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: number;

    @Column()
    name: string;

    @Column()
    brand: string;

    @Column()
    model: string;

    @Column('json')
    specs: object;

    @Column()
    price: number;

    @Column()
    warranty_period: string;

    @Column()
    image_url: string;

    @ManyToMany(() => Shop, (shop) => shop.products, {  })
    @JoinTable({ name: 'shop_product' })
    shops: Shop[];

    @OneToMany(() => Order, (order) => order.product)
    orders: Order[];
}