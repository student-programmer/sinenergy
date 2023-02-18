
import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey,  Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";

interface CategoryCreationAttrs{
    category:string;
    definition:string;
    link:string;
}

@Table({tableName:"category"})
export class Category extends Model<Category, CategoryCreationAttrs>{
@ApiProperty({example:"1", description:"Уникальный идентификатор"})
@Column({type:DataType.INTEGER, unique: true, autoIncrement:true, primaryKey:true})
id:number;

@ApiProperty({example:"бизнес", description:"Название категории"})
@Column({type:DataType.STRING, unique: true, allowNull:false})
category:string;

@ApiProperty({example:"Описание категории", description:"Название категории"})
@Column({type:DataType.STRING, unique: true, allowNull:true})
definition:string;

@ApiProperty({example:"нажми сюда", description:"Ссылка на статьи"})
@Column({type:DataType.STRING, unique: true, allowNull:true})
link:string;

@ForeignKey(() => User)
@Column({type: DataType.INTEGER})
userId: number;

@BelongsTo(() => User)
author: User;
}