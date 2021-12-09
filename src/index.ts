import "reflect-metadata";
import * as dotenv from "dotenv";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import  { generateSchema } from "../src/generateSchema";

dotenv.config();
async function main() {
    try {
    const port = process.env.PORT || 5001;
    const connection = await createConnection()
    const schema = await generateSchema()
    const server = new ApolloServer({ schema })
    
    await server.listen(port)
    console.log(`Server on port ${port}`);
    } catch(e){
        console.log(e)
        return { status: false, err: "An err ocurred" };
    }
}

main()