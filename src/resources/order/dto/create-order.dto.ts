import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, IsNotEmpty, IsDateString, IsBoolean } from "class-validator";

export class CreateOrderDto {
    @ApiProperty({ example: 'apr240601', description: 'Order code'})
    @IsString({ message: 'code must be a string' })
    @IsNotEmpty({ message: 'code must not be empty' })
    code: string;

    @ApiProperty({ example: '2024-12-31', description: 'Order time'})
    @IsDateString()
    @IsNotEmpty({ message: 'order_time must not be empty' })
    order_time: Date;

    @ApiProperty({ example: '5', description: 'Order quantity'})
    @IsInt({ message: 'quantity must be an integer' })
    @IsNotEmpty({ message: 'quantity must not be empty' })
    quantity: number;

    @ApiProperty({ example: 'John', description: 'Customer name'})
    @IsString({ message: 'customer_name must be a string' })
    @IsNotEmpty({ message: 'customer_name must not be empty' })
    customer_name: string;

    @ApiProperty({ example: '1234567890', description: 'Customer phone'})
    @IsString({ message: 'customer_phone must be a string' })
    @IsNotEmpty({ message: 'customer_phone must not be empty' })
    customer_phone: string;

    @ApiProperty({ example: 'true', description: 'Order confirmed'})
    @IsBoolean({ message: 'confirmed must be a boolean' })
    @IsNotEmpty({ message: 'confirmed must not be empty' })
    confirmed: boolean;
}



