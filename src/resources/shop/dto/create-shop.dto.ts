import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString, IsNotEmpty } from "class-validator";

export class CreateShopDto {
    @ApiProperty({example: 'm100', description: 'Shop code'})
    @IsString({message: 'code must be a string'})
    @IsNotEmpty({message: 'code must not be empty'})
    code: string;

    @ApiProperty({example: 'm100@mail', description: 'Shop email'})
    @IsString({message: 'email must be a string'})
    @IsNotEmpty({message: 'email must not be empty'})
    email: string;

    @ApiProperty({example: 'true', description: 'Delivery payment'})
    @IsBoolean({message: 'deliveryPayment must be a boolean'})
    @IsNotEmpty({message: 'deliveryPayment must not be empty'})
    delivery_payment: boolean
}
