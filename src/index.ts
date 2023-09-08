import "reflect-metadata";

import * as Express from "express";

import { AppDataSource } from "./datasource";

import bodyParser = require("body-parser");

AppDataSource.initialize()
  .then(async () => {
    const app = Express();
    const port = 8080;
    const host = "localhost";

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(port, host, () => {
      console.log(`Example app listening at http://${host}:${port}`);
    });
  })
  .catch((error) => console.log(error));
