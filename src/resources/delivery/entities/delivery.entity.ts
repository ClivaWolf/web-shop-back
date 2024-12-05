import { Order } from 'src/resources/order/entities/order.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class Delivery {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Order, (order) => order.delivery)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @Column()
  deliveryDate: Date; 

  @Column()
  deliveryTime: Date;

  @Column()
  deliveryAddress: string;

  @Column()
  customerName: string;

  @Column()
  courierName: string;
}