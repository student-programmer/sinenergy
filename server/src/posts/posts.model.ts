import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";
import { User } from "src/users/users.model";

interface PostCreationAttrs{
    title:string;
    content:string;
    userId:number;
    image: string
}

@Table({tableName:"posts"})
export class Post extends Model<Post, PostCreationAttrs>{
@ApiProperty({example:"1", description:"Уникальный идентификатор"})
@Column({type:DataType.INTEGER, unique: true, autoIncrement:true, primaryKey:true})
id:number;

@ApiProperty({example:"user@mail.com", description:"Почтовый адресс"})
@Column({type:DataType.STRING, unique: true, allowNull:false})
title:string;

@ApiProperty({example:"12345", description:"Пароль пользователя"})
@Column({type:DataType.STRING,  allowNull:false})
content:string;

@ApiProperty({example:"За хулиганство", description:"Причина блокировки"})
@Column({type:DataType.STRING, allowNull:true})
image:string;
@ForeignKey(() => User)
@Column({type: DataType.INTEGER})
userId: number;
@BelongsTo(() => User)
author: User;
}