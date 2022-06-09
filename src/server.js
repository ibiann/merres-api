import express from "express";
import { connectDB } from "./config/mongodb";
import { env } from "./config/environment";
import { apiV1 } from "./routes/v1";

//pass CXqXN569zQhi8Pme

connectDB()
  .then(() => console.log("Connected successfully!!!"))
  .then(() => rootServer())
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

const rootServer = () => {
  const app = express();

  // enable req.body data
  app.use(express.json());

  // use api v1
  app.use("/v1", apiV1);

  connectDB().catch(console.log);

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`hello, this is ${env.APP_HOST}:${env.APP_PORT}/`);
  });
};
