import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './category.model';
import { createCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
constructor(@InjectModel(Category) private category: typeof Category){}
   async create(dto: createCategoryDto) {
        const category = await this.category.create(dto)
        return category;
    }
    async  getCategory() {
        const category = await this.category.findAll({include:{all: true}});
        return category;
    }
}
