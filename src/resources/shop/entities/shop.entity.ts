import { Order } from 'src/resources/order/entities/order.entity';
import { Product } from 'src/resources/product/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from 'typeorm';

@Entity()
export class Shop {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    code: string;

    @Column()
    email: string;

    @Column()
    deliveryPayment: boolean;

    @ManyToMany(() => Product, product => product.shops)
    products: Product[]

    @OneToMany(() => Order, order => order.shop)
    orders: Order[]
}