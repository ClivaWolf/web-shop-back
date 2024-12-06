import { Order } from 'src/resources/order/entities/order.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne, CreateDateColumn } from 'typeorm';

@Entity()
export class Delivery {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Order, (order) => order.delivery)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @CreateDateColumn()
  delivery_date: Date; 

  @Column()
  delivery_time: Date;

  @Column()
  delivery_address: string;

  @Column()
  customer_name: string;

  @Column()
  courier_name: string;
}