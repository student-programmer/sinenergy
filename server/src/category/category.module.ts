import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { Category } from './category.model';
import { User } from 'src/users/users.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  providers: [CategoryService],
  controllers: [CategoryController],
  imports:[
    SequelizeModule.forFeature([Category, User]),
  ]
})
export class CategoryModule {}
