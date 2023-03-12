import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Personal } from './personal.model';
import { createPersonalDto } from './dto/create-personal.dto';

@Injectable()
export class PersonalService {
	constructor(@InjectModel(Personal) private personal: typeof Personal) {}
	async create(dto: createPersonalDto) {
		const personal = await this.personal.create(dto);
		return personal;
	}
	async getPersonal() {
		const personal = await this.personal.findAll({ include: { all: true } });
		return personal;
	}
	async findOne(id: number) {
		return await this.personal.findOne({ where: { id } });
	}
	async remove(id: number) {
		return await this.personal.destroy({ where: { id } });
	}

	async update(id, dto){
		return await this.personal.update(id, dto)
	}

	// async update(id:number, body:  {name: string, email: string, phone: string, description: string}){
	// 	const {name, email, phone, description} = body
	// 	return await this.personal.update(
	// 		{ id },
	// 		{
	// 			name,
	// 			email,
	// 			phone,
	// 			description,
	// 		}
	// 	);
	// }
	// async update(
	// 	id: number,
	// 	name: string,
	// 	email: string,
	// 	phone: string,
	// 	description: string
	// ) {
	// 	const personal = await this.personal.update(id, name, email, phone, description);
	// 	return personal;
	// }
}
