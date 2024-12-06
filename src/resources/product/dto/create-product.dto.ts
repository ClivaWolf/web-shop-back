import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, IsNotEmpty, IsObject } from "class-validator";

export class CreateProductDto {

    @ApiProperty({ example: 'vnlBtl1', description: 'Product code' })
    @IsString({ message: 'code must be a string' })
    @IsNotEmpty({ message: 'code must not be empty' })
    code: string;

    @ApiProperty({ example: 'Vinil "Beatles"', description: 'Product name' })
    @IsString({ message: 'name must be a string' })
    @IsNotEmpty({ message: 'name must not be empty' })
    name: string;

    @ApiProperty({ example: 'Beatles', description: 'Product brand' })
    @IsString({ message: 'brand must be a string' })
    @IsNotEmpty({ message: 'brand must not be empty' })
    brand: string;

    @ApiProperty({ example: 'Vinil', description: 'Product model' })
    @IsString({ message: 'model must be a string' })
    @IsNotEmpty({ message: 'model must not be empty' })
    model: string;

    @ApiProperty({ example: '{ "color": "red" }', description: 'Product specs' })
    @IsObject({ message: 'specs must be an object' })
    @IsNotEmpty({ message: 'specs must not be empty' })
    specs: object;

    @ApiProperty({ example: '1000', description: 'Product price' })
    @IsInt({ message: 'price must be an integer' })
    @IsNotEmpty({ message: 'price must not be empty' })
    price: number;

    @ApiProperty({ example: '1 year', description: 'Product warranty period' })
    @IsString({ message: 'warranty_period must be a string' })
    @IsNotEmpty({ message: 'warranty_period must not be empty' })
    warranty_period: string;

    @ApiProperty({ example: 'https://example.com/image.jpg', description: 'Product image URL' })
    @IsString({ message: 'image_url must be a string' })
    image_url?: string;

}
