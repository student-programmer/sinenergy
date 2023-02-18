import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { Category } from 'src/category/category.model';
import { User } from 'src/users/users.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Arcticles } from './articles.model';

@Module({
  providers: [ArticlesService],
  controllers: [ArticlesController],
  imports:[
    SequelizeModule.forFeature([Arcticles, User]),
  ]
})
export class ArticlesModule {}
