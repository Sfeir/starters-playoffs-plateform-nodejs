import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "0.0.0.0",
  port: 5432,
  username: "player",
  password: "Sf3!rPl@y0ff$",
  database: "nodejs-plateform-db",
  synchronize: true,
  logging: false,
  entities: ["src/entity/**/*.ts"],
});
