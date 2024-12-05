import { Product } from 'src/resources/product/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

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

    @ManyToMany(type => Product, product => product.shops)
    products: Product[]
}