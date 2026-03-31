import e from "express";
import type { Request, Response } from "express";
import config from "./config/config.ts";
import userRoutes from "./routes/userRoutes.ts";

const app = e();

app.listen(config.PORT, () =>
    {
    console.log(`Servidor rodando na porta ${config.PORT}`);
    }
);

app.get("/", (req : Request, res : Response) => 
    {
    res.send(`Hello World! Rodando na porta ${config.PORT}`);
    }
);

app.use(e.json())
app.use(userRoutes)