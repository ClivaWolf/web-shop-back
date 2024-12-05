import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString } from "class-validator";

export class CreateShopDto {
    @ApiProperty({example: 'm100', description: 'Shop code'})
    @IsString({message: 'code must be a string'})
    code: string;

    @ApiProperty({example: 'm100@mail', description: 'Shop email'})
    @IsString({message: 'email must be a string'})
    email: string;

    @ApiProperty({example: 'true', description: 'Delivery payment'})
    @IsBoolean({message: 'deliveryPayment must be a boolean'})
    delivery_payment: boolean
}
