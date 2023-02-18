import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Arcticles } from './articles.model';
import { createArticlesDto } from './dto/create-articles.dto';

@Injectable()
export class ArticlesService {
    constructor(@InjectModel(Arcticles) private articles: typeof Arcticles){}
    async create(dto: createArticlesDto) {
         const articles = await this.articles.create(dto)
         return articles;
     }
     async  getArticles() {
         const articles = await this.articles.findAll({include:{all: true}});
         return articles;
     }
    
}
