import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from 'src/roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { CreateDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User, private roleService: RolesService){

    }

    async  createUser(dto: CreateDto) {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue("ADMIN")
        await user.$set('roles', [role.id])
        user.roles = [role]
        return user;
    }
    async  getAllUser() {
        const users = await this.userRepository.findAll({include:{all: true}});
        return users
    }
    // функция для проверки пользователя по email
    async getUsersByEmail(email: string){
        const user = await this.userRepository.findOne({where:{email}, include:{all:true}})
        return user;
    }
    //функция добавления роли пользователя
    async addRole(dto: AddRoleDto){
        const user = await this.userRepository.findByPk(dto.userId)
        const role = await this.roleService.getRoleByValue(dto.value) // из серфиса берём функцию в которую передаём значение и получаем роль.
        if(role && user){
            await user.$add('role', role.id);
            return dto;
        }
        throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND)
    }
    // функция бана пользователя
    async ban(dto: BanUserDto){
        const user = await this.userRepository.findByPk(dto.userId);
        if(!user){
            throw new HttpException('Пользователь не найдены', HttpStatus.NOT_FOUND)
        }
        user.banned = true;
        user.banReason = dto.banReason;
        await user.save();
        return user;
    }
}


