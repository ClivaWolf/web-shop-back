import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsDateString, IsBoolean } from "class-validator";



export class CreateDeliveryDto {
    
    @ApiProperty({ example: '2024-12-31', description: 'Delivery date' })
    @IsDateString()
    @IsNotEmpty({ message: 'delivery_time must not be empty' })
    delivery_time: Date;

    @ApiProperty({ example: 'pushkina 5', description: 'Delivery address' })
    @IsString({ message: 'delivery_address must be a string' })
    @IsNotEmpty({ message: 'delivery_address must not be empty' })
    delivery_address: string;

    @ApiProperty({ example: 'John', description: 'Customer name' })
    @IsString({ message: 'customer_name must be a string' })
    @IsNotEmpty({ message: 'customer_name must not be empty' })
    customer_name: string;

    @ApiProperty({ example: 'Maria', description: 'Courier name' })
    @IsString({ message: 'courier_name must be a string' })
    @IsNotEmpty({ message: 'courier_name must not be empty' })
    courier_name: string;

    @ApiProperty({ example: 'apr240601', description: 'Order code' })
    @IsString({ message: 'order_code must be a string' })
    order_code: string;

}