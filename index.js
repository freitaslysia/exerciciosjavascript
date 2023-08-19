import express from "express"
import { intro } from "./exercicios/zero";

const app = express();
app.use(express.json());
const port = 3000;

app.post("/api/exercicio", (req, res) => {
    const introducao = intro;

    res.status(201).json({ 
        message: `${introducao}` })
});

app.listen(port, () => {
    console.log(`"Servidor rodando na porta" ${port}`)
});
