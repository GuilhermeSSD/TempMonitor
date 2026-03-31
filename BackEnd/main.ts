import e, {Request, Response} from "express";
import Config from "./config/config.js";
const app = e();

app.listen(Config.PORT, () =>
    {
    console.log(`Servidor rodando na porta ${Config.PORT}`);
    }
);

app.get("/", (req : Request, res : Response) => 
    {
    res.send(`Hello World! Rodando na porta ${Config.PORT}`);
    }
);