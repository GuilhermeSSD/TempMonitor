import e from "express";
import type { Request, Response } from "express";
import config from "./config/config.ts";
import userRoutes from "./routes/userRoutes.ts";

const app = e();

const port = Number(config.PORT) || 3010;

app.use(e.json());

// CORS simples para desenvolvimento (FrontEnd local)
app.use((req: Request, res: Response, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  return next();
});

app.get("/", (req: Request, res: Response) => {
  res.send(`Hello World! Rodando na porta ${port}`);
});

app.use(userRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
