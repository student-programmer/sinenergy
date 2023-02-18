import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";


export class CreateDto{

    
    @ApiProperty({example:"user@mail.com", description:"Почтовый адресс"})
    @IsString({message: 'Должно быть строковым знаечением'})
    @IsEmail({}, {message: "Некоректный email"})
    readonly email: string;
    @ApiProperty({example:"12345", description:"Пароль ползователя"})
    @IsString({message: 'Должно быть строковым знаечением'})
    @Length(4, 16, {message:'Не меньше 4 и не больше 16'})
    readonly password: string;
}