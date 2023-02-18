import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';

@Injectable()
export class RolesService {
// инджектим модель чтобы мы могли делать записи в базу данных, пользуемся декоратором инджект модел параметром передаём модель, указываем метод с типом модели
    constructor(@InjectModel(Role) private roleRepository: typeof Role){

    }

    async createRole(dto: CreateRoleDto){
        const role = await this.roleRepository.create(dto);
        return role;
        
    }
    async getRoleByValue(value: string){
        const role = await this.roleRepository.findOne({where: {value}})
        return role;
    }
}
