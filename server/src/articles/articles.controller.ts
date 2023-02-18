
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { createArticlesDto } from './dto/create-articles.dto';
@Controller('articles')
export class ArticlesController {
    constructor(private articlesService: ArticlesService){

    }
    @Post()
    create(@Body() dto: createArticlesDto){
        return this.articlesService.create(dto)
    }
    @Get()
    getArticles(){
        return this.articlesService.getArticles();
    }
}
