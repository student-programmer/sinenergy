import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { createCategoryDto } from './dto/create-category.dto';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService){

    }
    @Post()
    create(@Body() dto: createCategoryDto){
        return this.categoryService.create(dto)
    }
    @Get()
    getCategory(){
        return this.categoryService.getCategory();
    }

}
