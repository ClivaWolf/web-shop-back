import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Shop } from './entities/shop.entity';
import { QueryFailedError, Repository } from 'typeorm';

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(Shop)
    private readonly shopRepository: Repository<Shop>,
  ) { }
  async create(createShopDto: CreateShopDto) {
    try {
      // Проверяем наличие магазина с таким же кодом
      const existingShop = await this.shopRepository.findOne({ where: { code: createShopDto.code } });

      if (existingShop) {
        throw new ConflictException('Shop code already exists');
      }

      const shop = await this.shopRepository.create(createShopDto);
      return await this.shopRepository.save(shop);
    } catch (error) {
      // Обрабатываем возможные ошибки
      if (error instanceof QueryFailedError && error.message.includes('duplicate key')) {
        throw new ConflictException('Shop code already exists');
      }
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.shopRepository.find();
    } catch (error) {
      throw error;
    }
  }

  async findOneByCode(code: string) {
    try {
      const shop = await this.shopRepository.findOne({ where: { code } });
      if (shop !== null) {
        return shop
      }
      throw new NotFoundException
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updateShopDto: UpdateShopDto) {
    try {
      return await this.shopRepository.update(id, updateShopDto);
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.shopRepository.delete(id);
    } catch (error) {
      throw error;
    }
  }
} 
