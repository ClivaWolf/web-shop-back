import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { QueryFailedError, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) { }
  async create(createProductDto: CreateProductDto) {
    try {
      // Проверяем наличие продукта с таким же кодом
      const existingProduct = await this.productRepository.findOne({ where: { code: createProductDto.code } });

      if (existingProduct) {
        throw new ConflictException('Product code already exists');
      }

      const product = await this.productRepository.create(createProductDto);
      return await this.productRepository.save(product);
    } catch (error) {
      if (error instanceof QueryFailedError && error.message.includes('duplicate key')) {
        throw new ConflictException('Product code already exists');
      }
    }
  }

  async findAll() {
    try {
      return await this.productRepository.find();
    } catch (error) {
      throw error;
    }
  }

  async findOneByCode(code: string) {
    try {
      const product = await this.productRepository.findOne({ where: { code } });
      if (product !== null) {
        console.log(product);
        return product;
      }
      throw new NotFoundException;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      return await this.productRepository.update(id, updateProductDto);
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      return await this.productRepository.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
