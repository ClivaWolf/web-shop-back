import { Order } from 'src/resources/order/entities/order.entity';
import { Shop } from 'src/resources/shop/entities/shop.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    code: string;

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

    @Column({ nullable: true })
    image_url: string;

    @ManyToMany(() => Shop, (shop) => shop.products, { nullable: true })
    @JoinTable({ name: 'shop_product' })
    shops: Shop[];

    @OneToMany(() => Order, (order) => order.product, { nullable: true })
    orders: Order[];
}