import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ModuleRef } from "@nestjs/core";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users/users.model";
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { Post } from "./posts/posts.model";
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import { CategoryModule } from './category/category.module';
import * as path from 'path'
import { Category } from "./category/category.model";
import { PersonalModule } from './personal/personal.module';
import { Personal } from './personal/personal.model';

@Module({
	controllers: [],
	providers: [],
	imports: [
		ConfigModule.forRoot({
			envFilePath: `.${process.env.NODE_ENV}.env`,
		}),
		ServeStaticModule.forRoot({
			rootPath: path.resolve(__dirname, 'static'),
		}),
		SequelizeModule.forRoot({
			dialect: 'postgres',
			host: process.env.POSTGRES_HOST,
			port: Number(process.env.POSTGRES_PORT),
			username: process.env.POSTGRES_USER,
			password: process.env.POSTGRES_PASSWORD,
			database: process.env.POSTGRES_DB,
			// models: [User, Role, UserRoles, Post, Category, Personal],
			models: [User, Post, Category, Personal],
			autoLoadModels: true,
		}),
		UsersModule,
		// RolesModule,
		AuthModule,
		PostsModule,
		FilesModule,
		CategoryModule,
		PersonalModule,
	],
})
export class AppModule {}