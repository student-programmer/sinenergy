
import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey,  Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";

interface ArticlesCreationAttrs{
    category:string;
    definition:string
}

@Table({tableName:"articles"})
export class Arcticles extends Model<Arcticles, ArticlesCreationAttrs>{
@ApiProperty({example:"1", description:"Уникальный идентификатор"})
@Column({type:DataType.INTEGER, unique: true, autoIncrement:true, primaryKey:true})
id:number;

@ApiProperty({example:"Виды недвижимости, и как её купить", description:"Название статьи"})
@Column({type:DataType.STRING, unique: true, allowNull:false})
title:string;

@ApiProperty({example:"Описание cnfnmb", description:"Название статьи"})
@Column({type:DataType.STRING, unique: true, allowNull:true})
definition:string;

@ForeignKey(() => User)
@Column({type: DataType.INTEGER})
userId: number;

@BelongsTo(() => User)
author: User;
}