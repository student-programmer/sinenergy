import { Module } from '@nestjs/common';
import { PersonalService } from './personal.service';
import { PersonalController } from './personal.controller';
import { Category } from 'src/category/category.model';
import { User } from 'src/users/users.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Personal } from './personal.model';

@Module({
	providers: [PersonalService],
	controllers: [PersonalController],
	imports: [SequelizeModule.forFeature([Personal, User])],
})
export class PersonalModule {}
