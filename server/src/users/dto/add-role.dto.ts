import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class AddRoleDto{

    @ApiProperty({example:"USER", description:"Добавляемая роль"})
    @IsString({message:"Должно быть строкой"})
    readonly value: string;
    @ApiProperty({example:"1", description:"Идидентефекатор пользователя"})
    @IsNumber({}, {message: 'Должно быть цифровым значением'})
    readonly userId: number;
}