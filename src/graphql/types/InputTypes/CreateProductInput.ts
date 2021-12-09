import { InputType, Field } from "type-graphql";

@InputType()
export class CreateProductInput {
  @Field()
  code: string;

  @Field()
  position: number;

  @Field()
  quantity: number;

  @Field()
  image: string;

  @Field()
  price: number;

  @Field()
  description: string;
}