import { ApolloServer } from "apollo-server";
import { typeDefs } from "./graphql/schema.js";
import { resolvers } from "./graphql/resolvers.js";
import { config } from "./config/keys.js";
import mongoose from "mongoose";

(async () => {
    await mongoose.connect(config.MONGO_URI, {
        useNewUrlParser: true, useFindAndModify: false,
        useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB is now Connected!"))
    .catch((error) => console.log(error));

    const app = new ApolloServer({ typeDefs, resolvers });

    const port = process.env.PORT || 9000;
    app.listen(port, () => {
        console.log(`Server: http://localhost:${port}/graphql`);
        console.log("Press Ctrl + C to exit.");
    })
})();





