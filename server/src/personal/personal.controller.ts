import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Res } from '@nestjs/common';
import { PersonalService } from './personal.service';
import { createPersonalDto } from './dto/create-personal.dto';
@Controller('personal')
export class PersonalController {
	constructor(private personalService: PersonalService) {}
	@Post()
	create(@Body() dto: createPersonalDto) {
		return this.personalService.create(dto);
	}
	@Get()
	getPersonal() {
		return this.personalService.getPersonal();
	}
	@Get(':id')
	findOne(@Param('id') id: number) {
		return this.personalService.findOne(+id);
	}
	@Delete('/:id')
	remove(@Param('id') id: number) {
		return this.personalService.remove(id);
	}

	@Put(':id')
	update(@Param('id') id: number, @Body() dto: createPersonalDto) {
		return this.personalService.update(id, dto)
	}
	// @Patch(':id')
	// update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
	// 	return this.personalService.update(+id, updateUserDto);
	// }
	// @Put(':id')
	// update(
	// 	@Param('id') id: number,
	// 	@Body()
	// 	body: { name: string; email: string; phone: string; description: string }
	// ) {
	// 	return this.personalService.update(id, body);
	// }
}
