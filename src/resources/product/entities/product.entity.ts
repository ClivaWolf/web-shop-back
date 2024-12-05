import { Shop } from 'src/resources/shop/entities/shop.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';

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
    warrantyPeriod: string;

    @Column()
    imageUrl: string;

    @ManyToMany(() => Shop, (shop) => shop.products)
    @JoinTable()
    shops: Shop[];
}