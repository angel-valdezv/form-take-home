import { InputType, Field } from "type-graphql";

@InputType()
export class UpdateProductInput {
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