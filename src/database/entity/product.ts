import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export class Product extends BaseEntity {
  @Field(() => ID )
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String )
  @Column()
  code: string;

  @Field(() => Number )
  @Column()
  position: number;

  @Field(() => Number )
  @Column()
  quantity: number;

  @Field(() => String )
  @Column()
  image: string;

  @Field(() => Number )
  @Column()
  price: number;

  @Field(() => String )
  @Column()
  description: string;

}