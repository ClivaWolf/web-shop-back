import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { Delivery } from './entities/delivery.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryFailedError, Repository } from 'typeorm';
import { OrderService } from '../order/order.service';

@Injectable()
export class DeliveryService {
  constructor(
    @InjectRepository(Delivery)
    private readonly deliveryRepository: Repository<Delivery>,
  ) { }
  async create(createDeliveryDto: CreateDeliveryDto) {
    try {
      const delivery = await this.deliveryRepository.create(createDeliveryDto);
      return await this.deliveryRepository.save(delivery);
    } catch (error) {
      if (error instanceof QueryFailedError && error.message.includes('duplicate key')) {
        throw new ConflictException('Delivery code already exists');
      }
    }
  }

  async findAll() {
    try {
      return await this.deliveryRepository.find();
    } catch (error) {
      throw error;
    }
  }

  async findOneById(id: number) {
    try {
      const delivery = await this.deliveryRepository.findOne({ where: { id: id } });
      if (delivery !== null) {
        console.log(delivery);
        return delivery;
      }
      throw new NotFoundException;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updateDeliveryDto: UpdateDeliveryDto) {
    try {
      return await this.deliveryRepository.update(id, updateDeliveryDto);
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.deliveryRepository.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
