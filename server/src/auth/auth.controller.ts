import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BanUserDto } from 'src/users/dto/ban-user.dto';
import { CreateDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/users.model';
import { AuthService } from './auth.service';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
constructor(private authService: AuthService){

}

    @Post('/login')
    login(@Body() userDto: CreateDto){
        return this.authService.login(userDto)
    }
    @Post("/registration")
    registration(@Body() userDto: CreateDto){
        return this.authService.registration(userDto)
    }
    @Get("/check")
    check(@Body() user:User){
        return this.authService.check(user)

    }
}
