import { Resolver, Query, Arg, Mutation } from "type-graphql";
import { Product } from '../../../database/entity/product'
import { CreateProductInput } from "../../types/InputTypes/CreateProductInput"
import { UpdateProductInput } from "../../types/InputTypes/UpdateProductInput";
import { ProductCreatedObject } from "../../types/product_types";

@Resolver()
export class ProductResolver {
 //Get product by ID
  @Query(() => Product)
  product(@Arg("id") id: string) {
    const product = Product.findOne({ where: { id } });
    return product;
  }
  
    //List all products
  @Query(() => [Product])
  products() {
    return Product.find()
  }

  //Create product
  @Mutation(() => ProductCreatedObject)
    async createProduct(@Arg("data") data: CreateProductInput) {
    try{
        const product = Product.create(data);
        await product.save();
        return {status: true, message: "Product created"}; 
    } catch(e){
        console.log(e)
        return { status: false, err: "An err ocurred" };
    }
  }

  //Update product
  @Mutation(() => ProductCreatedObject)
  async updateProduct(@Arg("id", () => String) id: string, 
                   @Arg("data", () => UpdateProductInput) data: UpdateProductInput) {
    try{
        const product = await Product.findOne({ where: { id } });
        if (!product){
        return { status: false, message: "Product not found!"}
        }
        await Product.update({ id }, data);
        return {status: true, message: "Product updated"};
    } catch(e){
        console.log(e)
        return { status: false, err: "An err ocurred" };
    }
  }

  //Delete product
  @Mutation(() => Boolean)
  async deleteProduct(@Arg("id") id: string) {
        try {
            const product = await Product.findOne({ where: { id } });
            if (!product){
            return false;
            }
            await Product.delete(id);
            return true;
        }catch(e){
            console.log(e)
            return { status: false, err: "An err ocurred" };
        }
    }
}
