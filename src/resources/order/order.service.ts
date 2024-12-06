import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { QueryFailedError, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) { }
  async create(createOrderDto: CreateOrderDto) {
    try {
      // Проверяем наличие продукта с таким же кодом
      const existingOrder = await this.orderRepository.findOne({ where: { code: createOrderDto.code } });

      if (existingOrder) {
        throw new ConflictException('Order code already exists');
      }

      const order = await this.orderRepository.create(createOrderDto);
      return await this.orderRepository.save(order);
    } catch (error) {
      if (error instanceof QueryFailedError && error.message.includes('duplicate key')) {
        throw new ConflictException('Order code already exists');
      }
    }
  }

  async findAll() {
    try {
      return await this.orderRepository.find();
    } catch (error) {
      throw error;
    }
  }

  async findOneByCode(code: string) {
    try {
      const order = await this.orderRepository.findOne({ where: { code } });
      if (order !== null) {
        console.log(order);
        return order;
      }
      throw new NotFoundException;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    try {
      return await this.orderRepository.update(id, updateOrderDto);
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.orderRepository.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
