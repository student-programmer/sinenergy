
import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey,  Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";

interface PersonalCreationAttrs{
    name:string;
    email: string;
    phone: string;
	description:string;
}

@Table({ tableName: 'personal' })
export class Personal extends Model<Personal, PersonalCreationAttrs> {
	static delete(id: number) {
		throw new Error('Method not implemented.');
	}
	@ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
	@Column({
		type: DataType.INTEGER,
		unique: true,
		autoIncrement: true,
		primaryKey: true,
	})
	id: number;

	@ApiProperty({
		example: 'Виды недвижимости, и как её купить',
		description: 'Название статьи',
	})
	@Column({ type: DataType.STRING, unique: true, allowNull: false })
	name: string;

	@ApiProperty({ example: 'Описание', description: 'почта' })
	@Column({ type: DataType.STRING, unique: true, allowNull: false })
	email: string;
	@ApiProperty({ example: 'Описание', description: 'Номер телефона' })
	@Column({ type: DataType.STRING, unique: true, allowNull: false })
	phone: string;
	@ApiProperty({ example: 'Описание', description: 'Описание фактов' })
	@Column({ type: DataType.STRING, unique: true, allowNull: true })
	description: string;

	// @ForeignKey(() => User)
	// @Column({ type: DataType.INTEGER })
	// userId: number;

// 	@BelongsTo(() => User)
// 	author: User;
}