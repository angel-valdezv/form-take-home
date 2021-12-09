import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ProductCreatedObject {
  @Field(() => Boolean, { nullable: true })
  status: boolean;

  @Field(() => String, { nullable: true })
  message: string;
}
