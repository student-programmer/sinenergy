import { Body, Controller, Get, Post, UseGuards, UsePipes} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { create } from 'domain';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import {ValidationPipe} from "../pipes/validation.pipe";
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { CreateDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';
@ApiTags('Пользователи')
@Controller('users') // Контроллер тут пишем ендпоинт 
export class UsersController {
constructor(private usersService: UsersService){ 

}
@ApiOperation({summary: 'Создание пользователя'}) // Данные для документации 
@ApiResponse({status: 200, type: User})
@Post() // Создание пост запроса 
    create(@Body() userDto: CreateDto){
        return this.usersService.createUser(userDto) 
    }
    @ApiOperation({summary: 'Получение пользователей'})
    @ApiResponse({status: 200, type: [User]})
    @UseGuards(JwtAuthGuard)
    @Roles('ADMIN') //Указываем каким ролям будет доступен этот ендпоинт
    @UseGuards(RolesGuard)
@Get() // Создание гет запроса 
getAll(){
    return this.usersService.getAllUser();
}
    @ApiOperation({summary: 'Выдать роль'})
    @ApiResponse({status: 200})
    @Roles('ADMIN') //Указываем каким ролям будет доступен этот ендпоинт
    @UseGuards(RolesGuard)
        @Post("/role") // Создание гет запроса 
        addRole(@Body() dto: AddRoleDto){
    return this.usersService.addRole(dto);
}

    @ApiOperation({summary: 'Забанить пользователя'})
    @ApiResponse({status: 200})
    @Roles('ADMIN') //Указываем каким ролям будет доступен этот ендпоинт
    @UseGuards(RolesGuard)
        @Post("/ban") // Создание гет запроса 
        ban(@Body() dto: BanUserDto){
    return this.usersService.ban(dto);
}


}
