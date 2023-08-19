import express from "express"
import { somar } from './exercicios/um.js';

const app = express();
app.use(express.json());
const port = 3000;

app.post("/api/exercicio", (req, res) => {
    const result = somar(req.body.num1, req.body.num2)

    res.status(201).json({ 
        message: `${introducao}` })
});

app.listen(port, () => {
    console.log(`"Servidor rodando na porta" ${port}`)
});
